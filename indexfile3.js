//in built math object
console.log(Math.random()); //random no will generated
console.log(Math.round(2.2)); //it will roundof the given no
console.log(Math.max(5,8,9)); //it will give max no
console.log(Math.abs(-2)); //it give absolute values which is from zero


//String
//In java script strings are of two types
let lastname = 'dhoundiyal'; //it is primitive string
let firstname = new String ('akshat'); //it is object string

//escape sequences , to show some character we have to use \ before them
console.log(' \' ');

//template literal , by using this we dont have to use \ to print some limited char 
//and we get same output as we write in message 
//$ it is a place holder which get the variable in template literal
console.log(`this ${lastname} is my first
 messasge `);

 //date and time
 let date = new Date ();
 console.log(date);


 //arrays
 //we can store diff type of items in arrays in js

//to create arrays
let numbers =[1,3,5,7];
console.log(numbers);

//to acces index no
console.log(numbers[3]);

//to insert no in array at end
numbers.push(9);
console.log(numbers);

//to insert no at begining
numbers.unshift(10);
console.log(numbers);

//to insert no at middle
numbers.splice(2,0,9); //index to insert, element to delte, value
console.log(numbers);


//to search element inside array
console.log(numbers.indexOf(10)); //it give index of element have to search

//we want to check if a no exist in an array
 console.log(numbers.includes(88));


//object inside array
/*let courses=[ {no:1 , name:'web dev'} , {no:2, name : 'dsa'} ];
console.log(courses);*/


//to acces index no
/*console.log(courses[1]);


//to insert no in array at end
courses.push({no:1 , name:'web dev'});
console.log(courses);

//to insert no at begining
courses.unshift({no:1 , name:'web dev'});
console.log(courses);

//to insert no at middle
courses.splice(2,0,{no:1 , name:'web dev'}); //index to insert, element to delte, value
console.log(courses);*/


//to search in array having objects call back functions are use
/*a call back function is passed into another function as an argument which is involved inside the outer function
to complete some kind of action*/
/*let finding = courses.find(function(naam){
    return naam.name==='dsa';
});
console.log(finding);*/


let arr = [1,2,3, { name :'akshat'}];
console.log(arr);
//to remove element in array from begining shift is used
arr.shift();
console.log(arr);
//to remove element in array from end pop is used
arr.pop();
console.log(arr);
//to remove element from middle splice is used
arr.splice(1,1);
console.log(arr);

//best practice to delte a whole array is
arr.length=0;
console.log(arr);


//to delete whole array using loop
while(arr.length!=0){
    arr.pop();
}
console.log(arr);

//combining and slicing arrays
let firstarr = [1,2,3];
let secondarr = [4,5,6];

//to combine array concat function is used
let combinedarr = firstarr.concat(secondarr);
console.log(combinedarr);

//to slice an array- remove some part
let slicedarr = combinedarr.slice(5,6);
console.log(slicedarr);

/*
let study=[ {no:1 , name:'web dev'} ];
let study2=[ {no:2, name : 'dsa'}];

let combing= study.concat(study2);
console.log(combing)*/


//spread operator
 //it is also used to combine arrays and put an element also
 let combiningAgain = [...firstarr,...secondarr,'a'];
 console.log(combiningAgain);

 //iterating an array
 let arr1 = [10,20,30,40,50];

 //for of loop
 for(let value of arr1){
    console.log(value);
 };

 //for each loop
arr1.forEach(value => console.log(value));

//joining arrays element
let mess = [1,2,3,4,5,6];
console.log(mess);
let join = mess.join(',');
console.log(join)

//spliting whole string 
let message = 'this is mst';
let parts = message.split(' ');
console.log(parts);

//sorting arrays
//sorting function first convert element into string than sort it
let num = [1,5,68,56,65];
let sorted = num.sort();
console.log(sorted);
num.reverse();
console.log(sorted);

//filtering arrays
let numb = [1,2,-1,-4];

//filtering positive values
/*let filtered = numb.filter(function(value){
    return value>=0;
})*/


//short hand line for uppper 
let filtered = numb.filter(value=>value>=0)

console.log(filtered);

//mapping arrays
let line = [7,8,9,10];
console.log(line)
/*let mapped=line.map(function(value){
    return 'studentNo'+value;
})*/


console.log(mapped);


