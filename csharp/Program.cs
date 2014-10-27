using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        var inputs = new Dictionary<int, string>()
        {
            {2, "second"},
            {3, "Fizz"},
            {5, "Buzz"},
            {6, "Sixth"}
        };

        Console.WriteLine("Vanilla:");
        Console.WriteLine();
        Vanilla.FizzBuzz(inputs, Console.Out);
        Console.WriteLine();

        Console.WriteLine("Linq-y:");
        Console.WriteLine();
        Linqy.FizzBuzz(inputs, Console.Out);

        Console.ReadLine();
    }
}
