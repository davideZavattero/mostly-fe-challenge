package jobs

import "math/rand"

func randBetween(min int, max int) int {
	return rand.Intn(max-min) + min
}
