let NO_OF_CHARS = 256;
//max_distinct_char("acgsdhasd",4)

function max_distinct_char(str, n)
{
	
	let count = new Array(NO_OF_CHARS);
	for(let i = 0; i < count.length; i++)
	{
		count[i] = 0;
	}

	for(let i = 0; i < n; i++)
	{
		count[str[i].charCodeAt(0)]++;
	}

	let max_distinct = 0;
	for(let i = 0; i < NO_OF_CHARS; i++)
	{
		if (count[i] != 0)
		{
			max_distinct++;
		}
	}
    
	return max_distinct;
}


function smallesteSubstr_maxDistictChar(str)
{
	
	
	let n = str.length;
	let max_distinct = max_distinct_char(str, n);
	let minl = n;
	for(let i = 0; i < n; i++)
	{
		for(let j = 0; j < n; j++)
		{
			let subs = null;
			
			if (i < j)
				subs = str.substring(i, j);
            
            else
				subs = str.substring(j, i);
                
			let subs_lenght = subs.length;
			let sub_distinct_char = max_distinct_char(subs, subs_lenght);

			if (subs_lenght < minl && max_distinct == sub_distinct_char)
			{
				minl = subs_lenght;
			}
		}
	}
	return minl;
}


let str = "AABBBCBBAC";
let len = smallesteSubstr_maxDistictChar(str);

console.log("The length of the smallest substring consisting of maximum distinct characters :"  + len);

