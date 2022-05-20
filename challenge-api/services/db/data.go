package db

type User struct {
	Id       string `json:"id"`
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

type Job struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Progress int    `json:"progress"`
}

type Data struct {
	Users []User `json:"users"`
	Jobs  []Job  `json:"jobs"`
}
