// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package main

import (
	"challenge-api/routes"
	"challenge-api/services/config"
	"challenge-api/services/container"
	"challenge-api/services/db"
	"challenge-api/services/jobs"
	"challenge-api/services/users"
	"log"
)

// Injectors from main.go:

func injectServiceContainer() (*container.ServiceContainer, error) {
	configConfig, err := config.New()
	if err != nil {
		return nil, err
	}
	dbDB, err := db.New(configConfig)
	if err != nil {
		return nil, err
	}
	usersUsers := users.New(dbDB)
	jobsJobs, err := jobs.New(dbDB)
	if err != nil {
		return nil, err
	}
	serviceContainer := container.New(configConfig, dbDB, usersUsers, jobsJobs)
	return serviceContainer, nil
}

// main.go:

func main() {
	sc, err := injectServiceContainer()

	if err != nil {
		log.Fatalln(err)
	}

	r := routes.SetupRoutes(sc)
	r.Run(":" + sc.Config.Port())
}