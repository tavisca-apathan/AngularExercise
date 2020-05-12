
class ArrayOps{
     constructor(private StrArr : Array<string>)
     {

     };

     SortArray()  : Array<string>
     {
         return this.StrArr.sort((a,b) => a.length - b.length);
     }
}

let strArr = new Array<string>();        
strArr.push("James Bond");
strArr.push("Ethan Hunt");
strArr.push("Indiana Jones");
strArr.push("Jason Bourn");

let ops = new ArrayOps(strArr);
console.log("after sorting:");
ops.SortArray().forEach((v,i) => console.log(v));
console.log("after reversing:")
ops.SortArray().reverse().forEach((v,i) => console.log(v));