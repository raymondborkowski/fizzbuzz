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

function advanced(set) {
  var found = false,
  line = '',
  keys = Object.keys(set),
  cleanKeys = [];
  keys.forEach(function(key) {
    cleanKeys.push(parseInt(key, 10));
  });
  for (var i = 1; i <= 100; i++) {
    found = false;
    line = '';
    for (var k = 0; k < cleanKeys.length; k++) {
      if (i % cleanKeys[k] === 0) {
        found = true;
        line += set[cleanKeys[k]];
      }
    }
    if (!found) {
      line += i;
    }
    console.log(i + ':', line);
  }
}

advanced({
  '3': "Fizz",
  '5': "Buzz",
  '2': "second",
  '6': "sixth"
});
