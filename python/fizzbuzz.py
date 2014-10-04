"""
run tests with:

    python test_fizzbuzz.py


"""

import collections


def advanced(divisor_mappings):
    output = []
    found = False
    line = ''
    divisor_map = collections.OrderedDict(
        (int(k), v) for k, v in divisor_mappings.items()
    )
    for i in range(1, 101):
        found = False
        line = ''
        for divisor in divisor_map:
            if i % divisor == 0:
                found = True
                line += divisor_map[divisor]
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
