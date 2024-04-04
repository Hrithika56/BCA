//if(condition)

let pill;
console.log(pill)

if(pill=='red')  
{
  console.log('reality')
}
else if(pill=='blue')
{
  console.log('stay in matrix')
}
else
{
    console.log('kill yourself')
}

//switch (variable) {case value1:(break)}

switch(pill) {
   case'red': {
    console.log('reality ')
    break;

   }

   case 'blue': {
    console.log('stay in material')
    break;
   }
   default: {
    console.log('kill yourself')
    break;
   }
   }

   //questions
   //check if number is even or odd

   let number='one'
   if(number %2 ==0)
   {
    console.log('number is even', number);
   }
else if(number%2==1) {
    console.log('number is odd ', number )
}
else{
    console.log('invalid input')
}

//check if year is leap year

let year;

if(year%100==0) {
 if(year%400==0){
    console.log('leap year',year)
}  else {
    console.log('not a leap year')
}
}
else if(year%4==0)
{
    console.log('leap year', year)
}
else{
    console.log('not a leap year')
}

//check grade:A>=80, 80>B >=60

let marks;
let grade;
if(marks >=80)
{
    grade='a';
} else if(marks<80 && marks >=60){
    grade='b';
}
else if(marks <60 && marks >=40) {
    grade='c';
} else if(marks <40 && marks >=0) {
    grade='d';
} else {
    grade='undefined'
} 
console.log('grade',grade);

//type of triangle
let a=3,b=4,c=3;
if(a==b && b==c) {
    console.log('triangle is equilateral ')
} else if(a==b || b==c || c==a )
{
    console.log ('triangle is isosceles')
} else {
    console.log('triangle is scalene')
}
// numerial grade to letter grade 