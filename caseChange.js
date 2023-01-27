 /*Swap Case
Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
Examples
Input: "Hello-LOL"
Output: hELLO-lol
Input: "Sup DUDE!!?"

 
 
 
 Input: "Sup DUDE!!?"
Output: sUP dude!!?
*/ function SwapCase(str) {
  let retStr = '';
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      retStr += str[i].toUpperCase();
    } else if (/[A-Z]/.test(str[i])) {
      retStr += str[i].toLowerCase();
    } else {
      retStr += str[i];
    }
  }
  // code goes here
  return retStr;
}