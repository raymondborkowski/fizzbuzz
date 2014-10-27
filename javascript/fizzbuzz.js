function fizzbuzz(myMap) {
  var line,
    myMapKeys = Object.keys(myMap);
  for (var i = 1; i <= 100; i++) {
    line = '';
    myMapKeys.forEach(function (key) {
      if (i % key === 0) {
        line += myMap[key];
      }
    });
    if (!line) {
      line += i;
    }
    console.log(i + ':', line);
  }
}

fizzbuzz({
  2: "second",
  3: "Fizz",
  5: "Buzz",
  6: "sixth"
});
