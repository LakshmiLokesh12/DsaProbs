/*Star Rating
Have the function StarRating(str) take the str parameter being passed which will 
be an average rating between 0.00 and 5.00, and convert this rating into a list 
of 5 image names to be displayed in a user interface to represent the rating as a
 list of stars and half stars. Ratings should be rounded to the nearest half.
  There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg".
   The output will be the name of the 5 images (without the extension),
    from left to right, separated by spaces. For example: if str is "2.36" then this should be
     displayed by the following image:
So your program should return the string "full full half empty empty".
Examples
Input: "0.38"
Output: half empty empty empty empty
Input: "4.5"
Output: full full full full half
*/

string StarRating(string str) 
{
	// converting the string
	
let result="";
	let starCount = 0;

	// subtract by either 1 or a fraction of its value until we reach zero
	while (starCount < 5)
	{
		// if greater than or equal to one this will result in a full star 
		if (value >= 1)
		{
			result += "full ";

			// update our value
			value -= 1;
		}
		else if (value > 0)
		{
			if (value+.25 >= 1)
			{
				result += "full ";
			}
			else if (value+.25 >= .5)
			{
				result += "half ";
			}
			else
			{
				result += "empty ";
			}

			value -= value;
		}
		else
		{
			// empty star
			result += "empty ";
		}

		starCount++;
	}

	return result;
}