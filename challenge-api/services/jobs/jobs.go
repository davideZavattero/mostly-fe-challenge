package jobs

import (
	"challenge-api/services/db"
	"errors"
	"fmt"
	"github.com/google/uuid"
	"math"
	"sync"
	"time"
)

type Jobs struct {
	db       *db.DB
	jobsList []db.Job
}

var mu sync.Mutex

func (jobs *Jobs) AddJob(name string) (*db.Job, error) {
	mu.Lock()
	defer mu.Unlock()

	newJob := db.Job{Name: name, Id: uuid.New().String(), Progress: 0}
	jobs.jobsList = append(jobs.jobsList, newJob)

	users, err := jobs.db.FindUsers()

	if err != nil {
		return nil, err
	}

	// Since it's a mock API we can ignore concurrency issues
	var data db.Data
	data.Jobs = jobs.jobsList
	data.Users = users

	err = jobs.db.SaveIntoDisk(&data)

	if err != nil {
		return nil, err
	}

	return &newJob, nil
}

func (jobs *Jobs) JobProgress(jobId string) (int, error) {
	jobsList, err := jobs.db.FindJobs()

	if err != nil {
		return 0, err
	}

	for _, job := range jobsList {
		if job.Id == jobId {
			return job.Progress, nil
		}
	}

	return 0, errors.New("job was not found")
}

func New(database *db.DB) (*Jobs, error) {

	jobsList, err := database.FindJobs()

	if err != nil {
		return nil, err
	}

	jobs := &Jobs{database, jobsList}

	go func() {
		for {

			mu.Lock()

			list, err := database.FindJobs()

			if err == nil {
				for index, _ := range list {
					if list[index].Progress >= 100 {
						continue
					}

					list[index].Progress = int(math.Min(
						100,
						float64(list[index].Progress+randBetween(3, 15)),
					))
				}

				users, err := jobs.db.FindUsers()

				if err == nil {
					var data db.Data
					data.Jobs = list
					data.Users = users
					jobs.jobsList = list
					err = jobs.db.SaveIntoDisk(&data)
				} else {
					fmt.Println("Error while saving job progresses into fake db")
				}
			} else {
				fmt.Println("Error while updating progress for jobs")
			}

			mu.Unlock()

			randomPause := time.Duration(randBetween(3, 8))
			time.Sleep(randomPause * time.Second)
		}
	}()

	return jobs, nil
}
