var a = {2: "second", 3: "Fizz", 5: "Buzz", 6: "sixth"};

Array.apply(null, {length: 101}).map(Number.call, Number).forEach(function (i) {if (i !== 0) {var l = '';Object.keys(a).forEach(function (k) {if (i % k === 0) {l += a[k];}});if (!l) {l += i;}console.log(i + ':', l);}});