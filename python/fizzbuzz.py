"""
run tests with:

    python test_fizzbuzz.py


"""

import collections


def advanced(divisor_mappings):
    output = []
    divisor_map = collections.OrderedDict(
        (int(k), v) for k, v in divisor_mappings.items()
    )
    for i in range(1, 101):
        line = ''
        for divisor in divisor_map:
            if i % divisor == 0:
                line += divisor_map[divisor]
        if line is '':
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
