// function basic() {
//   for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       if (i % 3 === 0) {
//         console.log('Fizz');
//       }
//       if (i % 5 === 0) {
//         console.log('Buzz');
//       }
//     } else {
//       console.log(i);
//     }
//   }
// }

function advanced(myMap) {
  var found = false,
    line = '',
    keys = Object.keys(myMap),
    cleanKeys = [];
    keys.forEach(function(key) {
      cleanKeys.push(parseInt(key, 10));
    });
  for (var i = 1; i <= 100; i++) {
    found = false;
    line = '';
    for (var j = 0; j < cleanKeys.length; j++) {
      if (i % cleanKeys[j] === 0) {
        found = true;
        line += myMap[cleanKeys[j]];
      }
    }
    if (!found) {
      line += i;
    }
    console.log(i + ':', line);
  }
}

advanced({
  '2': "second",
  '3': "Fizz",
  '5': "Buzz",
  '6': "sixth"
});
