using System.Collections.Generic;
using System.IO;
using System.Linq;

public static class Linqy
{
    public static void FizzBuzz(IDictionary<int, string> input, TextWriter output)
    {
        const int first = 1;
        output.WriteLine(string.Join("\r\n", Enumerable.Range(first, 100)
            .Select(i => input.Aggregate(string.Empty, (acc, kvp) => i%kvp.Key == 0 ? acc + kvp.Value : acc))
            .Select((text, i) => text.Length == 0 ? (i + first).ToString() : text)));
    }
}
