//go:build wireinject
// +build wireinject

package main

import (
	"challenge-api/routes"
	"challenge-api/services/config"
	"challenge-api/services/container"
	"challenge-api/services/db"
	"challenge-api/services/jobs"
	"challenge-api/services/users"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/google/wire"
	"log"
)

func injectServiceContainer() (*container.ServiceContainer, error) {
	wire.Build(container.New, config.New, db.New, users.New, jobs.New)
	return &container.ServiceContainer{}, nil
}

func main() {
	sc, err := injectServiceContainer()

	if err != nil {
		log.Fatalln(err)
	}

	if sc.Config.IsRelease() {
		gin.SetMode(gin.ReleaseMode)
	}

	r := routes.SetupRoutes(sc)

	if sc.Config.IsRelease() {
		fmt.Println("API is listening on localhost:" + sc.Config.Port())
	}
	r.Run(":" + sc.Config.Port())
}
