// function myfunction1()
// {
//     console.log("this is function")
//     console.log("it will perform some task")

// }
// myfunction1();
// function sayhi(message)
// {
//     if(message)
//     {
//         return message;
//     }
//     else{
//         return "nothing" ;
//     }


// }

// console.log(sayhi("hello"));
// console.log(sayhi());
// function sum()
// {
//     console.log(arguments.length);
// }
// sum(1,2);
// sum(1,2,3,4,5,6);
// sum(1,2,3,4,4,5,6,6,6);


// // var function4=new function5("a","b", "return a+b");
// // console.log(function);
// var a=function()
// {
//     console.log("this is function expression");
//     return "hello frnds";
// };
// console.log(a());

// //self invoking function
// (function()
// {
//     console.log("this is a self invoking function");
// })();
  

// //function hoisting

//  sayhello(5,10)
//  function sayhello(a,b)
// {
//     console.log("result= "+(a+b));

// }

//javascript scope
// there are three types of scope
// 1)=block scope 
// 2)=function scope
// 3)=global scope
// 4)=block scope
// var is a global scope
function scope1()
{

    
      var a =10;
        console.log(a);
    console.log(a);
    
}
//console.log(a);
scope1();
