function myfunction(object){
	 with (object){
		  x=2;
	 }
}

var obj1={
  	x:3
};

var obj2={
	 y:3
};

myfunction(obj1);
console.log(obj1.x); //2

myfunction(obj2);
console.log(obj2.x); //undefined 
console.log(x); //leaked to global 

