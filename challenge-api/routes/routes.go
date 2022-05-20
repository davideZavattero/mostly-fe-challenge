package routes

import (
	"challenge-api/services/container"
	"challenge-api/services/db"
	"fmt"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(sc *container.ServiceContainer) *gin.Engine {
	routes := gin.Default()

	routes.POST("auth", func(c *gin.Context) {
		var params AuthParams
		err := c.BindJSON(&params)
		if err != nil {
			c.JSON(400, apiError("Error while parsing request body"))
			fmt.Println(err)
			return
		}
		is := sc.Users.Auth(params.Email, params.Password)
		if is {
			token, err := signNewToken(params.Email)
			if err != nil {
				c.JSON(500, apiError("Unable to sign jwt token"))
				return
			}
			c.JSON(200, gin.H{
				"token": token,
			})
			return
		}
		c.JSON(400, apiError("Invalid credentials"))
	})

	routes.GET("me", authRequired(sc), func(c *gin.Context) {
		user := c.MustGet("user").(*db.User)

		c.JSON(200, gin.H{
			"name":  user.Name,
			"email": user.Email,
		})
	})

	routes.GET("jobs", authRequired(sc), func(c *gin.Context) {
		jobs, err := sc.DB.FindJobs()

		if err != nil {
			c.JSON(500, apiError("Error while loading jobs"))
			return
		}

		c.JSON(200, jobs)
	})

	routes.GET("jobs/status/:jobId", authRequired(sc), func(c *gin.Context) {
		jobId := c.Param("jobId")
		progress, err := sc.Jobs.JobProgress(jobId)

		if err != nil {
			c.JSON(400, apiError("Error while checking job progress"))
			return
		}

		c.JSON(200, gin.H{
			"progress": progress,
		})
	})

	routes.POST("jobs", authRequired(sc), func(c *gin.Context) {
		var params JobParams
		err := c.BindJSON(&params)

		if err != nil {
			c.JSON(400, apiError("Error while parsing request body"))
			fmt.Println(err)
			return
		}

		newJob, err := sc.Jobs.AddJob(params.Name)

		if err != nil {
			c.JSON(500, apiError("Error while creating new job"))
			fmt.Println(err)
			return
		}

		c.JSON(201, newJob)
	})

	return routes
}
