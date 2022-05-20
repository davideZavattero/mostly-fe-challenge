package config

import (
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	port string
	db   string
}

func (c *Config) Port() string {
	return c.port
}

func (c *Config) DB() string {
	return c.db
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

	conf := &Config{port, db}

	return conf, nil
}
