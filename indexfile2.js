console.log('start');

//creating object

const rectangle={
    length: 1,
    breadth: 2,


    //if we are  creating any function inside a object it is known as method 

    draw: function(){
        console.log('drawing rectangle');
    }
};

const rectangle1={
    length: 1,
    breadth: 2,


    //if we are  creating any function inside a object it is known as method 

    draw: function(){
        console.log('drawing rectangle');
    }

    
};


//by factory function we can also create object 
//in this camelcase notation will flow which is first letter after first word is capital
function createRectangle(){

    let checking={
        length:1,
        breadth:2,
    }
    return checking;
}

//creating variable to call object
let variableforrectangle = createRectangle();
  





 function person (hand , legs) {

    const behaviour = {

        walking:function(){
            console.log('walking with full capacity');
        },

       hands:hand,
       leg:legs


    };
    return behaviour;
 }

 let print  = person(2,2); //calling factory function


 //creating object by constructor function
 //in this pascal notation will flow which is first letter of every word is capital
 //constructor is used to initialize and define the values and properties
 function Creating(len, bre){

    //this to refer current object , here it reffering to object1
    this.length=len;
    this.breadth=bre;
    this.draw= function (){
        console.log('drawing');
    }

 }

 //object creation using constructor function
 //new will give empty object
 let object1 =  new Creating(5,6);



 //dynamic nature of object
 object1.color = 'blue'; //adding color property
 delete object1.breadth;  //deleting breadth property

 //constructor property
 //it is used to check object constructor by which it is created objectname.constructor

  //creatin object using constructor
  let objectone = new Creating(2,5);
  objectone.length;
  
  console.log(objectone);

  //functions are also an object in javascript

/*let a=10;
let b=a;


a++;
console.log(a);
console.log(b);*/

let a={value:10}
let b=a;
a.value++;
console.log(a);
console.log(b);

let square={
    side:2,
    noOfside:4
}

//for in loop
//to acces variables and values of object
for(let key in square ){
    console.log(key,square[key]);

}


//for-of-loop
/*for(let key of Object.entries(square)){
    console.log(key);
}*/


//to check is property is present in object
if('length' in square){
    console.log('present');
}
else{
    console.log('absent');
}

//object cloning or copying because , object is reference data type it doesnot copy value it copy adress field to copy value these are used
//using iteration
let src={
    value:10
};
let dest={};

for(let key in src){
    dest[key]=src[key];
}


//using assign function Object.assign
let emptyobj={};
let vari = Object.assign(emptyobj,src);

//using spread operator
let vari2={...src};

 





