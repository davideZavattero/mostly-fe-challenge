package db

import (
	"challenge-api/services/config"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

type DB struct {
	cfg *config.Config
}

func (db *DB) check() error {

	_, err := os.Stat(db.dbFileName())

	if err != nil {
		if os.IsNotExist(err) {

			fmt.Println("Fake database doesn't exist, creating a fresh one")

			data := &Data{[]User{
				{
					"23ab32f6-1bf6-47ea-8b98-f75515c721a0",
					"admin@admin.com",
					"Admin",
					"test",
				},
			}, []Job{}}

			err = db.SaveIntoDisk(data)

			if err != nil {
				return err
			}

			fmt.Println("Fake database created with initial data")

		} else {
			return err
		}
	}

	return nil
}

func (db *DB) dbFileName() string {
	return db.cfg.DB() + ".json"
}

func (db *DB) SaveIntoDisk(data *Data) error {
	name := db.dbFileName()
	file, err := json.MarshalIndent(&data, "", "  ")

	if err != nil {
		return err
	}

	err = ioutil.WriteFile(name, file, 0644)

	if err != nil {

		return err
	}
	return nil
}

func (db *DB) loadFromDisk() (*Data, error) {
	name := db.dbFileName()
	file, err := ioutil.ReadFile(name)

	if err != nil {
		return nil, err
	}
	data := &Data{}
	err = json.Unmarshal(file, data)

	if err != nil {
		return nil, err
	}
	return data, nil
}

func New(cfg *config.Config) (*DB, error) {
	db := &DB{cfg}

	err := db.check()

	if err != nil {
		return nil, err
	}

	return db, nil
}
