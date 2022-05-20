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

	r := routes.SetupRoutes(sc)
	r.Run(":" + sc.Config.Port())
}
