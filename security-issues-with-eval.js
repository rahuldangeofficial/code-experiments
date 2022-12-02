
//this is just an example to demonstrate, why you should not use eval

/*

Some day you decide to write 1 function instead of 4 different
functions to perform operation like addition, subtraction,
multiplication & division, Inorder to make it easy for you
and that is when you use eval! without knowing how it can be exploited!

*/


function operation(operator,num1,num2){
  return eval(`${num1}${operator}${num2}`);
}

//now users start using this feature 

console.log(operation("+",10,20));  //30 
console.log(operation("-",20,10));  //10 
console.log(operation("*",10,20));  //200 
console.log(operation("/",20,10));  //2

//so far everything is good but now attacker comes

console.log(operation("operation();",`operation=new Function("console.log('failure');");`," "));

//attacker modified your "operation" function by passing malicious parameters 

console.log(operation("+",10,20));  //failure undefined
console.log(operation("-",20,10));  //failure undefined
console.log(operation("*",10,20));  //failure undefined
console.log(operation("/",20,10));  //failure undefined

//your feature is no longer working correctly! 




