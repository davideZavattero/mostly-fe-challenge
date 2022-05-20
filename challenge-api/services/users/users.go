package users

import (
	"challenge-api/services/db"
)

type Users struct {
	db *db.DB
}

func (users *Users) Auth(email string, password string) bool {
	usersList, err := users.db.FindUsers()

	if err != nil {
		return false
	}

	for _, user := range usersList {
		if user.Email == email && user.Password == password {
			return true
		}
	}
	return false
}

func (users *Users) FindByEmail(email string) (*db.User, error) {
	usersList, err := users.db.FindUsers()

	if err != nil {
		return nil, err
	}

	for _, user := range usersList {
		if user.Email == email {
			return &user, nil
		}
	}

	return nil, nil
}

func New(db *db.DB) *Users {
	users := &Users{db}

	return users
}
