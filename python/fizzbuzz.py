def advanced(myDict):
  found = False
  line = ''
  keys = myDict.keys()
  cleanKeys = []
  for key in keys:
    cleanKeys.append(int(key))
  for i in range(1, 101):
    found = False
    line = ''
    for j in range(0, len(cleanKeys)):
      if i % cleanKeys[j] == 0:
        found = True
        line += myDict[keys[j]]
    if not found:
      line += str(i)
    print str(i) + ': ' + line

advanced({
  '2': 'second',
  '3': 'Fizz',
  '5': 'Buzz',
  '6': 'sixth'
})
