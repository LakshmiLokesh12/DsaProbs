function vowelsAndConsonants(s) {
    let vowels = [];
    let consonants = [];
    for(var i=0; i<s.length ; i++) {
        if((s[i]=='a')||(s[i]=='e')||(s[i]=='i')||(s[i]=='o')||(s[i]=='u')){
            vowels.push(s[i])
        } else {
            consonants.push(s[i]);
        }
    } 
    console.log("number of vowels",vowels.length);
    console.log("number of consonants",consonants.length);
        let concatArr = [...vowels, ...consonants];
   for (let i of concatArr) {
        console.log(i);
       
   }
} 
vowelsAndConsonants("abeiduiomc");