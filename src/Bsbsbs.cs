using System;

using System.Collections.Concurrent;

using System.Collections.Generic;

using System.Threading.Tasks;

class Program

{

    static void Main()

    {

        // Create a list of data

        List<int> data = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // Define the desired batch size

        int batchSize = 3;

        // Create a list to store the partitions

        List<IEnumerator<int>> partitions = new List<IEnumerator<int>>();

        // Create partitions based on the batch size

        var partitioner = Partitioner.Create(data);

        var partitionSize = partitioner.Count / batchSize;

        for (int i = 0; i < batchSize; i++)

        {

            var partition = partitioner.GetPartition(i);

            partitions.Add(partition);

        }

        // Process each partition

        Parallel.ForEach(partitions, partition =>

        {

            while (partition.MoveNext())

            {

                int number = partition.Current;

                ProcessNumber(number);

            }

        });

        Console.WriteLine("Parallel processing finished.");

        Console.ReadLine();

    }

    static void ProcessNumber(int number)

    {

        // Process the number

        Console.WriteLine($"Processing number: {number}");

    }

}
