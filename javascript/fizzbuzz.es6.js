function fizzbuzz(myMap) {
    let line;
    const myMapKeys = Object.keys(myMap);
    for (let i = 1; i <= 100; i++) {
        line = '';
        myMapKeys.forEach((key) => {
            if (i % key === 0) {
                line += myMap[key];
            }
        });
        if (!line) {
            line += i;
        }
        console.log(`${i}: ${line}`);
    }
}

fizzbuzz({
    2: 'second',
    3: 'Fizz',
    5: 'Buzz',
    6: 'sixth',
});

