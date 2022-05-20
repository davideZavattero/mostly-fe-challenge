package container

import (
	"challenge-api/services/config"
	"challenge-api/services/db"
	"challenge-api/services/jobs"
	"challenge-api/services/users"
)

type ServiceContainer struct {
	Config *config.Config
	DB     *db.DB
	Users  *users.Users
	Jobs   *jobs.Jobs
}

func New(cfg *config.Config, db *db.DB, users *users.Users, jobs *jobs.Jobs) *ServiceContainer {
	cont := &ServiceContainer{cfg, db, users, jobs}
	return cont
}
