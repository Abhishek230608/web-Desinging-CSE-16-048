let person {
    name: ""
} ;
console.log(typeof(person));
let mixedArray=[1,"Hello",true,[1,2,3],{name:"Alice", age:25}];
console.log(mixedArray[0]);
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));
//map
let newarray=[1,2,3,4,5];
let squaredArray= newarray.map((num) => num*5);
console.log(squaredArray);
//filter
let evenNumbers=[1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.filter(num=> num%2===0);
console.log(filteredEvenNumbers);
//reduce
let sum=[1,2,3,4,5];
let total=sum.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
console.log(total);
let sub=[1,2,3,4,5];
let total=sub.reduce((accumulator,currentValue)=> accumulator+currentValue,2);
console.log(total);
//map
let students=[
    {name:"Alice", marks:85},
        {name:"Bob",marks:92},
         {name:"Charlie",marks:78}
];
let marks= students.map(student=>student.name);
console.log(names);
let topStudents =students.filter
(student=>student.marks>80);
console.log(topStudents);
let totalMarks= students.reduce((acc,student)=>acc+student.marks,0);
console.log(totalMarks);
//mixed object
let mixedObject={
    name:"Alice",
    age:25,
    hobbies:{"reading","traveling","coding"},
    Address:{
        street:"123 Main St",
        city:"New York",
        country:"USA"
    },
    greet: function (){
        console.log()
    }
}
// array inside object 
let company = {
    name: "tech corp"
    
}