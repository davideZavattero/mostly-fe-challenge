package db

func (db *DB) FindUsers() ([]User, error) {
	data, err := db.loadFromDisk()

	if err != nil {
		return nil, err
	}

	return data.Users, nil
}

func (db *DB) FindJobs() ([]Job, error) {
	data, err := db.loadFromDisk()

	if err != nil {
		return nil, err
	}

	return data.Jobs, nil
}
