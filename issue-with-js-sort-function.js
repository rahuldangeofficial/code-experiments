//Issue with JS sort function

//I will show you something

let arr=[2,4,5,1,4,9,7,11,20];

arr.sort();

console.log(arr.toString()); //1,11,2,20,4,4,5,7,9

//Unexpected right?

//Expectation - 1,2,4,4,5,7,9,11,20
//Reality     - 1,11,2,20,4,4,5,7,9 

//This happens because before making comparison our numbers will get 
//Converted into strings and it performs in alphabetical comparison


arr.sort((rahul,dange)=>rahul-dange);//that's how i resolved it!

//This performs mathematical operations on each consecutive
//Elements to identify where the anomaly happened and replace elements

console.log(arr.toString()); //1,2,4,4,5,7,9,11,20



