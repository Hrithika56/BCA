//calculate area of rectangle 

// function area(length=1, width=1){
    // return length*width;
// }

let area = (length=1, width=1) => {
    return length *width;
}

console.log("area =", area(2))
// sum of an array 

// function sumarray(a) {
    // let sum=0;
    // for(let i=0; i<a.length; i++) {
       //  sum=sum+a[i];
   // }
    return sum;
//}

let sumArray=(a) => {
    let sum=0;
    for(let i=0; i<a.length; i++) {
        sum=sum+aq[i];
    }
    return sum;
}

console.log(sumArray([1,4,6,9]))

//check palindrome 252
// reverse a string

function reverse(str)  //string => gnirts
{
    let revStr="";
    for(let i=str.length-1; i>=0; i--)
    {
        revStr=revStr+str[i];
        console.log(revStr)
    }
    return revStr;
}

console.log(reverse("dayananda "))

function palindrome(n) {
    let strN=''+n;
    let revN= reverse(strN);
    return StrN==revN;
}

console.log(palindrome(12321))

// create a function that takes number n as input  and  output the array of  list of digits of the number 

//a=[]; a.push(5); a=[5]; a.push(1); a=[5,1]

function getDigits(n) {
    const digits = [];
    
    // Convert number to string to easily access individual digits
    const numAsString = n.toString();
    
    // Iterate over each character (digit) in the string
    for (let i = 0; i < numAsString.length; i++) {
        // Convert each character back to a number and push it to the array
        digits.push(parseInt(numAsString[i]));
    }
    
    return digits;
}

// Example usage:
const number = 12345;
console.log(getDigits(number)); // Output: [1, 2, 3, 4, 5]
