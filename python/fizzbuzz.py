def advanced(divisor_mappings):
    output = []
    found = False
    line = ''
    keys = divisor_mappings.keys()
    divisors = []
    for key in keys:
        divisors.append(int(key))
    for i in range(1, 101):
        found = False
        line = ''
        for j in range(0, len(divisors)):
            if i % divisors[j] == 0:
                found = True
                line += divisor_mappings[keys[j]]
        if not found:
            line += str(i)
        output.append(str(i) + ': ' + line)
    return "\n".join(output)


if __name__ == '__main__':
    print advanced({
        '2': 'second',
        '3': 'Fizz',
        '5': 'Buzz',
        '6': 'sixth'
    })
