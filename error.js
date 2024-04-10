//throw  any expression like  object , variable, things, num etc  u can throw 

//throw 42;
//throw 'ball';
//throw {
    head:'tail';
//}

//try.....catch.....finally 

// let divide = (a,b)=> {
//     try{
//         if(b==0) {
//             throw "division by 0"
//         }
//         else{
//     return a/b;
// }
//     } catch(e){
//         console.log(e)
//         console.log('why are you dividing by 0')
//     }
// }

// let sum =(a,b,c)=> {
//     let div=divide(a,b);
//     return div+c;
// }
// console.log(divide(1,0,2))

// //compute area only when length and width area positive number 

// let area= (length, width)=> {
//     try{
//         if(length <0 || width < 0) {
//             throw 'negative values'
//         } else {
//             return length*width;
//         }
       
//     } catch(e){
//         alert(e);

//     }
// }
// console.log(area(-4,9 ))

// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// // Example usage:
// const num = [1, 2, 3, 4, 5];
// console.log(sumArray(num)); // Output will be 15


// function sumArray(num) {
//     try {
//         if (!Array.isArray(num)) {
//             throw new Error("Input is not an array.");
//         }
        
//         let sum = 0;
//         for (let i = 0; i < num.length; i++) {
//             if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
//                 throw new Error("Array contains non-numeric values.");
//             }
//             sum += num[i];
//         }
//         return sum;
//     } catch (error) {
//         console.error("Error:", error.message);
//         return null; // Return null to indicate failure
//     }
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Output: 15

// const invalidArray = [1, 2, 'three', 4, 5];
// console.log(sumArray(invalidArray)); // Output: Error: Array contains non-numeric values.

//sum array 
let sumArray=(a) => {
    try {
        if(a.length==0){
            throw "empty array";  
        } else {
            let sum=0;
            for(let i=0; i<a.length; i++) {
                sum=sum+a[i];

            }
            return sum;
        }
    } catch(e) {
        console.log(e);
    }
}
console.log(sumArray([1,2,3]));