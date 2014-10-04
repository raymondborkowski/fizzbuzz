import fizzbuzz


def test_fizzbuzz():
    config = {
        '2': 'second',
        '3': 'Fizz',
        '5': 'Buzz',
        '6': 'sixth'
    }
    """
    context managers are a pretty sweet python feature,
    the block below will close the file for us even if python
    crashes. it replaces the try/catch/finally boilerplate in other
    languages, though you could still do that if you wanted.

    context managers work with database connections, sockets, thread locks
    and anything else that implements the interface
    """
    with open("desired_output.txt") as f:
        output = fizzbuzz.advanced(config)
        tests = [i.strip() for i in f.readlines()]
        for expected, actual in zip(tests, output.split("\n")):
            assert expected == actual, (expected, actual)

    print "OK"


if __name__ == '__main__':
    # normally you'd have test discovery and a runner, but whatever.
    test_fizzbuzz()
