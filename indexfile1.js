console.log('akshat');

let a=5; //declaring variable 
console.log(a);

//dynamic typing
let b=4;
b='yoo';

console.log(b);



let person ={ // person is a object having properties like firstname and age 
    firstname: 'akshat',
    age : 20
};

//to acces perosn properties 

//by dot notations
console.log(person.age);
console.log(person.firstname);

//by bracket notations
console.log(person['age']);
console.log(person['firstname']);

//arrays
let names = ['akshat','himanshi','yoyo',123];
console.log(names);
let numbers = [123 , 'one' , 'two' , 'three'];
console.log(numbers);

//we can acces arrays by index 
console.log(names[1]);
console.log(numbers[1]);

//to overide array element
names[1]='mast'; //overriding index 1 value
console.log(names[1]);

//ternary operator or conditional operator
let age=15;  
let statuss =( age>=18)?'i can vote':'cannot vote';

console.log(statuss);

//if else statement

let marks =90;
if(marks >=90){
    console.log('you are topper');
}
else if(marks<=90){
    console.log('you are avaerage');
}
else{
    console.log('fail');
}

//switch case
 let num =1;

 switch(num){

    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
 }

 //loops
 
