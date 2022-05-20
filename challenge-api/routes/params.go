package routes

type AuthParams struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type MeParams struct {
	Token string `json:"Token" binding:"required"`
}

type JobParams struct {
	Name string `json:"name" binding:"required"`
}
