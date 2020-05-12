var ArrayOps = /** @class */ (function () {
    //strArr: Array<string> = new Array<string>();
    function ArrayOps(StrArr) {
        this.StrArr = StrArr;
    }
    ;
    ArrayOps.prototype.SortArray = function () {
        return this.StrArr.sort(function (a, b) { return a.length - b.length; });
    };
    return ArrayOps;
}());
var strArr = new Array();
strArr.push("James Bond");
strArr.push("Ethan Hunt");
strArr.push("Indiana Jones");
strArr.push("Jason Bourn");
var ops = new ArrayOps(strArr);
console.log("after sorting:");
ops.SortArray().forEach(function (v, i) { return console.log(v); });
console.log("after reversing:");
ops.SortArray().reverse().forEach(function (v, i) { return console.log(v); });
