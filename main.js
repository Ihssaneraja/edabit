// let countTrue = [true, false, false, true, false];

// const newArray = function () {

//   if (countTrue.length === 0) {

//     console.log("Empty array");

//     return; // Exit the function early if the array is empty
//   }

//   let trueCount = 0;

//   for (let i = 0; i < countTrue.length; i++) {

//     if (countTrue[i] === true) {

//       trueCount++;
//     }
//   }

//   console.log("Number of true values:", trueCount);
// }

// newArray();




// function countTrue(arr) {

//     let count = 0; 
  
 

//     for (let i = 0; i < arr.length; i++) {
     
//       if (arr[i] === true) {
        
//         count++; 
//       }
//     }
  
//     return count; 
//   }
  
 
//   console.log(countTrue([true, false, false, true, false]));

//   console.log(countTrue([false, false, false, false])); 

//   console.log(countTrue([])); 
  





//   function redundant(str) {

//     return function() {

//       return str;

//     };
//   }
  
  
//   const f1 = redundant("apple");
//   console.log(f1()); 
  
//   const f2 = redundant("pear");
//   console.log(f2()); 
  
//   const f3 = redundant("");
//   console.log(f3()); 
  



//   function convert(minutes){

//    return minutes*60;


//   }

// console.log(convert(5*60));

// console.log(convert(3*60));

// console.log(convert(2*60));



// function calculate(number){

 

//   return number+1;

// }

// console.log(calculate(0));

// console.log(calculate(9));

// console.log(calculate(-3));


// function hello(stringo){

// return stringo.toLowerCase();


// }

// console.log( hello("hello edabit.com"));


// function nextEdge(side1,side2 ){

//  return maximumrange=(side1+side2)-1;


// }

// console.log(nextEdge(8,10));
// console.log(nextEdge(5,7));
// console.log(nextEdge(9,2));


// function circuitPower(voltage,current){


//   return voltage*current;



// }

// console.log(circuitPower(230, 10));
// console.log(circuitPower(110, 3));
// console.log(circuitPower(480, 20));


// function calcAge(ageInYears){


//   return ageInYears*365;
// }

// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));


// function lessThanOrEqualToZero(number){

//   if(number<=0){

//     return true; 
//   }else{
//     return false; 
//   }
 

// }

// console.log(lessThanOrEqualToZero(5));

// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));


// function sumPolygon(n){



//  return  (n-2)*180;
  
// }

// console.log(sumPolygon(3));
// console.log(sumPolygon(4));
// console.log(sumPolygon(6));


// function addition(A,B){

//   return A+B;
// }

// console.log(addition(3, 2));

// console.log(addition(-3, -6));
// console.log(addition(7, 3));


// function getFirstValue(arr){


//   return arr[0];
// }

// console.log(getFirstValue([1, 2, 3]));

// console.log(getFirstValue([80, 5, 100]));

// console.log(getFirstValue([-500, 0, 50]));


// function howManySeconds(hours){

//   return hours*60*60;
// }

// console.log(howManySeconds(2));

// console.log(howManySeconds(10));

// console.log(howManySeconds(24));


// function cubes(number){


//   return number**3;

// }

// console.log(cubes(3));
// console.log(cubes(5));
// console.log(cubes(10));


// function nameString(name){


//    let result=name+"Edabit";

//    return result;
// }

// console.log(nameString("Mubashir"));

// console.log(nameString("Matt"));

// console.log(nameString("javaScript"));


// function points(twoPointers, threePointers) {

//   return (2 * twoPointers) + (3 * threePointers);
// }


// console.log(points(1, 1));    
// console.log(points(7, 5));   
// console.log(points(38, 8));   


function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      return 'Boom!';
    }
  }
  return 'there is no 7 in the array';
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));     
console.log(sevenBoom([8, 6, 33, 100]));          
console.log(sevenBoom([2, 55, 60, 97, 86]));       
