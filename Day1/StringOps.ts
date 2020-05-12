class StringOps{
    
    constructor(private str : string)
    {
    };

    ReplaceAt( index, replacement) {
        return this.str.substr(0, index) + replacement + this.str.substr(index + replacement.length);
    }

    CapitalizeSentencesInString(indexesOfFullStop : number[])
    {

        this.str.charAt(0).toUpperCase();
        indexesOfFullStop.pop();
        indexesOfFullStop.forEach(element => {
                let char = this.str.charAt(element + 1).toUpperCase();
                 this. str = this.ReplaceAt(element + 1, char);
        });

        console.log(this.str);
    }

     GetIndicesAndOccurences(regex : any) {
        let result = [];
        let match;
        regex = new RegExp(regex);
        while (match = regex.exec(this.str))
           {
               result.push(match.index);
               //console.log(match.index);
           }
               return result;
     }
}

let str = "Sort and Reverse data from string array based on string length.ex 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data.find out the indexes and occurances of character 'a' in it - Findout number of statements in the string(value after . symbol).convert the first character of the statement in Upper case.";
let strOps = new StringOps(str);
let matchedIndexes = strOps.GetIndicesAndOccurences(/a/g);
console.log("Count of character 'a':");
console.log(matchedIndexes.length);
console.log("Indexes of character 'a':");
console.log(JSON.stringify(matchedIndexes));
matchedIndexes = strOps.GetIndicesAndOccurences(/\./g);
console.log(`Count of statements: ${matchedIndexes.length + 1}`);
console.log(JSON.stringify(matchedIndexes));
strOps.CapitalizeSentencesInString(matchedIndexes);




