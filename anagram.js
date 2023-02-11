class Anagrams
{
	static
	printAnagrams(arr)
	{
		var map = new Map();
		
		for (var i = 0; i < arr.length; i++)
		{
			var word = arr[i];
      const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
      var sortedWord = sort(word);
			
			if (map.has(sortedWord))
			{
				(map.get(sortedWord).push(word) > 0);
			}
			else
			{
			
				var words = new Array();
				(words.push(word) > 0);
				map.set(sortedWord, words);
			}
		}
	
		for (const s of map.keys())
		{
			var values = map.get(s);
      
			if (values.length > 1)
			{
				document.write(values);
        document.write(",");
			}
		}
	}
	static
	main(args)
	{
		// Driver program
		var arr = ["data", "atad", "number", "tada", "adat", "bernum"];
		Anagrams.printAnagrams(arr);
	}
}
Anagrams.main([]);