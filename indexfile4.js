//  //functions in js
//  /*it is a block of code that fullfill a specific task*/

//  //we can declare function by two method
//  // by function declaration
//  function running (){
//     console.log('running');
//  }
//  running();

//  //by function assignment 
//  //it is of two types

//  //named function assignment
//  //function name is present
//   let stand = function walk (){
//     console.log('walking');
//   }
//   stand();

//   //anonymous function assignment
//   //function name is not present
//   let stand2 = function (){
//     console.log('walking2');
//   }
//   stand2(); 


//   //to make function  dynamic use arguments object 
//   function sum(a,b){
//     console.log(arguments); 

//         // arguments is an Array -like object accessible inside functions that contains the values of the arguments passed to that function
//         //by using this we can give multiple parameters no matter what the input parameters are there
//         //it accept arrgument as an object
//        //to access arguments use loop-
//        let total=0;
//        for(let value of arguments){
//         total+=value;
//        }
//         return total;
//   }
 
//   let a = sum(1,2,3,4,5); //all data is present inside arguments object
//   console.log('sum of all values present in arguments',a);

//   //rest operator
//   //it allow us to accept as many arguments as an array
//   function sum(...args){
//     console.log(args);
//   }
// sum(1,2,3,5,6,7,8);



// //getter and setter
// let person={
//     fname:'akshat',
//     lname:'dhoundiyal',
//     //by getter we can access properties
//     get fullname(){
//         return `${person.fname} ${person.lname} `;
//     },
//     //by setter we can change and update properties 
//     set fullname(value){
//       if(typeof value !== String ){
//          throw new Error("you have not sent an string");
//       }
//         let parts = value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
// }
// };
// //using setter
// person.fullname='kya baat';
// //using getter
// console.log(person.fullname);

// //error handling
// //when unknown error occur put code in try
// try{
//   person.fullname=true;
// }
// catch(e){
//  // alert('you have sent a no in full name')
//   alert(e);

// }
// console.log(person.fullname);


//reducing an array

   let a = [1,2,3,4];
// let total=0;
//   for( let value of a){
//     total+=value;
//   }
// console.log(total);

//we can write this whole array by reducing
let total = a.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0 );
console.log(total); 

