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

let outcome=[[ 1,3,2,4,5,6],  // 3 dimenstional 
            [4,2,1,5,3,6],
            [1,6,5,2,4,3],
            [4,3,1,2,6,5],
            [6,5,3,8,2,1],
            [4,5,6,1,2,3]]
console.log(outcome[1][3]) //op as 5
console.log(outcome[4][3]) //op as 8

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