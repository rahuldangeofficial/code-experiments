//just fun with functions


function oneTimeFunction(){
  console.log("OTF executed!");
  oneTimeFunction=new Function("console.log('expired!')");
}

oneTimeFunction(); //OTF executed!
oneTimeFunction(); //expired!
oneTimeFunction(); //expired!

//----------------------------------------

function sucideFunction(){
  console.log("executed!");
  sucideFunction=function(){};
}

sucideFunction(); //executed!
sucideFunction(); //
sucideFunction(); //

//----------------------------------------

function myFunction(){
  console.log("previous code!");
  myFunction=new Function("console.log('new code!')");
}

myFunction() //previous code!
myFunction() //new code!

//-----------------------------------------


let restrictedFeature=(activationKey)=>{
  if(activationKey==='S3542'){
    restrictedFeature=()=>{
      console.log("therahuldange!");
    };
    console.log("feature activated");
  }else{
    console.log("enter activation key!");
  }
}

restrictedFeature(); //enter activation key!
restrictedFeature(); //enter activation key!

restrictedFeature("arbitryValue");  //enter activation key!
restrictedFeature("S3542");         //feature activated

restrictedFeature(); //therahuldange!
restrictedFeature(); //therahuldange!
restrictedFeature(); //therahuldange!

//-----------------------------------------
