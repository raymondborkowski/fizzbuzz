using System.Collections.Generic;
using System.IO;

public static class Vanilla
{
    public static void FizzBuzz(IDictionary<int, string> input, TextWriter output)
    {
        for (var i = 1; i <= 100; i++)
        {
            var found = false;
            foreach (var kvp in input)
            {
                if (i % kvp.Key == 0)
                {
                    output.Write(kvp.Value);
                    found = true;
                }
            }
            if (!found)
            {
                output.Write(i);
            }
            output.WriteLine();
        }
    }
}
