package main

import (
	"fmt"
	"strconv"
)

var mymap map[int]string

func main() {
	mymap = make(map[int]string)
	mymap[2] = "second"
	mymap[3] = "Fizz"
	mymap[5] = "Buzz"
	mymap[6] = "sixth"

	for i := 1; i < 101; i++ {
		fizzbuzz(i)
	}
}

func fizzbuzz(i int) {
	var found = false
	var line = ""
	for j := range mymap {
		if i % j == 0 {
			found = true
			line += mymap[j]
		}
	}

	if !found {
		line = strconv.Itoa(i)
	}

	fmt.Println(line)
}