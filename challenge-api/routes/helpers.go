package routes

import (
	"challenge-api/services/container"
	"errors"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"time"
)

var jwtKey = []byte("super_secret_key")

type JwtClaims struct {
	jwt.StandardClaims
	Email string `json:"email"`
}

func signNewToken(email string) (string, error) {
	expirationTime := time.Now().Add(360 * 24 * time.Hour).Unix()
	claims := &JwtClaims{Email: email, StandardClaims: jwt.StandardClaims{
		ExpiresAt: expirationTime,
	}}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	signed, err := token.SignedString(jwtKey)

	if err != nil {
		return "", err
	}

	return signed, nil
}

func decodeToken(token string) (string, error) {
	claims := &JwtClaims{}
	tkn, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})

	if err != nil {
		return "", err
	}

	if !tkn.Valid {
		return "", errors.New("invalid token")
	}

	return claims.Email, nil
}

func authRequired(sc *container.ServiceContainer) gin.HandlerFunc {
	return func(c *gin.Context) {
		var params MeParams

		err := c.BindHeader(&params)

		if err != nil {
			c.JSON(400, apiError("Error while parsing request body"))
			c.Abort()
			return
		}

		email, err := decodeToken(params.Token)

		if err != nil {
			c.JSON(400, apiError("Error while decoding token"))
			c.Abort()
			return
		}

		user, err := sc.Users.FindByEmail(email)

		if err != nil {
			c.JSON(400, apiError("User doesn't exist for this token"))
			c.Abort()
			return
		}

		c.Set("user", user)
		c.Next()
	}
}

func apiError(message string) gin.H {
	return gin.H{
		"message": message,
	}
}
