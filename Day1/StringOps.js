var StringOps = /** @class */ (function () {
    function StringOps(str) {
        this.str = str;
    }
    ;
    StringOps.prototype.ReplaceAt = function (index, replacement) {
        return this.str.substr(0, index) + replacement + this.str.substr(index + replacement.length);
    };
    StringOps.prototype.CapitalizeSentencesInString = function (indexesOfFullStop) {
        var _this = this;
        this.str.charAt(0).toUpperCase();
        indexesOfFullStop.pop();
        indexesOfFullStop.forEach(function (element) {
            var char = _this.str.charAt(element + 1).toUpperCase();
            _this.str = _this.ReplaceAt(element + 1, char);
        });
        console.log(this.str);
    };
    StringOps.prototype.GetIndicesAndOccurences = function (regex) {
        var result = [];
        var match;
        regex = new RegExp(regex);
        while (match = regex.exec(this.str)) {
            result.push(match.index);
            //console.log(match.index);
        }
        return result;
    };
    return StringOps;
}());
var str = "Sort and Reverse data from string array based on string length.ex 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data.find out the indexes and occurances of character 'a' in it - Findout number of statements in the string(value after . symbol).convert the first character of the statement in Upper case.";
var strOps = new StringOps(str);
var matchedIndexes = strOps.GetIndicesAndOccurences(/a/g);
console.log("Count of character 'a':");
console.log(matchedIndexes.length);
console.log("Indexes of character 'a':");
console.log(JSON.stringify(matchedIndexes));
matchedIndexes = strOps.GetIndicesAndOccurences(/\./g);
console.log("Count of statements: " + (matchedIndexes.length + 1));
console.log(JSON.stringify(matchedIndexes));
strOps.CapitalizeSentencesInString(matchedIndexes);
