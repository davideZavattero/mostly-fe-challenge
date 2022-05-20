package config

import (
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	port      string
	db        string
	isRelease bool
}

func (c *Config) Port() string {
	return c.port
}

func (c *Config) DB() string {
	return c.db
}

func (c *Config) IsRelease() bool {
	return c.isRelease
}

func New() (*Config, error) {

	godotenv.Load()

	db := os.Getenv("DB")
	if len(db) == 0 {
		db = "fake-db"
	}

	port := os.Getenv("PORT")

	if len(port) == 0 {
		port = "5335"
	}

	isDev := os.Getenv("IS_DEV")
	isRelease := true
	if len(isDev) > 0 {
		isRelease = false
	}

	conf := &Config{port, db, isRelease}

	return conf, nil
}
