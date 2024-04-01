console.log("hello javascript")
console.log(1+2)

//const, var, let

const PI=3.1415; //its cannot be changed it will fixed throughout the program 

var x=1; //int 
console.log(x)
var y=1.4;  //double or float 
console.log(y)
var z="hello" ; // string 
console.log(z)
var a=[x,y,z];  // all are going in list 
console.log(a);
var Ist = [1, "0", [1,2], 4.8, true ];
console.log(Ist)
var obj = {
    name:" mr x",
    job:"hacker",
    age: 23,
    address:"bangloren ",
}
console.log(obj)



let phone={
    company: {
        name:'samsung',
        country: 'india',
    },
    name:'galaxy',
    size: 6.5,
    weight:200,
    color: ['blue', 'black', 'slive']

}

let str1= 'hello'; //single  all three ways are used 
let str2="world";  //double quotes 
let str3=`hello world`; // backtik 
console.log(str3)

let outcome=[[ 1,3,2,4,5,6], //0   // 3 dimenstional 
            [4,2,1,5,3,6],  //1
            [1,6,5,2,4,3],  //2
            [4,3,1,2,6,5],  //3 
            [6,5,3,8,2,1],  //4
            [4,5,6,1,2,3]]  //5    *// u should start from 0 , 1 ,2 , 3 counting 
console.log(outcome[1][3]) //op as 5  hw? [1] represnt rows and [3]is column ie 1st row in 3rd column 5 is ans 
console.log(outcome[4][3]) //op as 8  [4] row 3rd column is 8 

let D3=[
    [ 
         [1,2] , [1 ,2 ]
         ],                    //2 DIMENSIONAL ARRAY
    [ 
        [1,2 ],[1,2 ]
    ],
    [
         [1,2],[1,2]
        ],
]  //3*2


//expression 
//arithmetic operations
let sum = 1 + 1.4; // 2.4
let dif = 1 - 1.4; // -0.4
let mul = 2 * 4; // 8
let div = 4 / 2; // 2
let mod = 5 % 2; // 1
let pow = 5 ** 2; // 25
let ex1 = 2 * (1 - 6 / 2); // -4


//boolean
let isMore = 2 >= 4; // false
let isLess = 5 < 10; // true
let bool1 = isMore || isLess; // true
let bool2 = isMore && isLess; // false
let isEqual1 = 0 == '0';//true type conversion
let isEqual2 = 0 === '0'; //false no type conversion
let notEqual1 = 0 != '0'; //false
let notEqual2 = 0 !== '0'; //true


//string
let str1 = 'Hello';
let str2 = 'World';
let str3 = str1 + ' ' + str2;//'Hello World'
let num = 42;
let str4 = `The answer to universe is ${num}.`;//  The answer to universe is 42


