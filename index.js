function header(title){
    console.log(`------->>${title.toUpperCase()}<<-------`)
}
/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
header ("1st question")
function calculateIntegers (n1,n2){
 if(n1===n2){
     return (n1 + n2)*3
 }else{
     return "not a same"
 }
}
//  const calculateIntegers = (n1,n2) => n1==n2 ? (n1+n2)*3 : "not a same" 
console.log(calculateIntegers(5,5))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
header ("2nd question")
// function checkIntegers (num1,num2){
//     if (num1 === 50 ||num2===50 || num1+num2===50){
//         return true
//     }else{
//         return false
//     }
// }
const checkIntegers = (num1,num2) => num1 === 50 || num2===50||num1+num2===50 ? true : false
console.log(checkIntegers(25,25))
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */


/* 4. Create a function to find and return the largest of three given integers. */
header ("4th question")
 const largestInteger = Math.max(50,51,53);
console.log(largestInteger)

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
    header("5th question")
    function checkRange (n1,n2){
        if ((n1 >=40 && n1<=60 && n2>=40 && n2<=60) ||
        (n1 >=70 && n1 <=100 && n2 >=70 && n2 <=100)){
            return true
        }else{
            if(!(n1 >= 40 && n1<=60 && n2>=40 && n2 <=60 ) ||
            (!(n1 >= 40 && n1<=60 && n2>=40 && n2 <=60 ))){
                return false 
            }
        }
    }
console.log(checkRange(44,56))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
header("6th question")
function newStr (num,str){
    return Array.apply(null, Array(num)).map(String.prototype.valueOf,str);
}
console.log(newStr(2 ,"Asadbek"))
/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
    header("7th question")
 function cityName(Str){
if(Str.length >=3 && ((Str.substring(0, 3) === "Los") || (Str.substring(0,3)==="New"))){
    return Str
}else{
    return false
}
 }
console.log(cityName("London"));
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

//  function calcReturn(elements){
//      let sum =0
//   for(let i =0; i<elements.length;i++){
//     sum+=elements[i]
//   }
//  }
//  console.log(calcReturn[5,10,5])
let array = [ 1,2,3]
let sum = 0
   for(let i =0; i<array.length;i++){
     sum+=array[i]
   }
  
console.log(sum)
 /* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
header("9th question")
    function testAnArrayOfLength(nums) {
        if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
           return true
        } 
        else
        {
           return false
        }
    }
    console.log(testAnArrayOfLength([1, 5]));  
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 
    header("10th question")
    function testAnArray(num) {
        if (!(num.indexOf(1) != -1 || num.indexOf(3) != -1)){
           return true
        } 
        else
        {
           return false
        }
    }
    console.log(testAnArray([7, 5])); 

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 


    function longestString(arr)
    {
      let maxStr = arr[0].length;
      let string = arra[0];
      for (let i = 1; i < arr.length; i++) {
          let maximum = arr[i].length;
          if (maxi > max_str) {
              ans = arra[i];
              max_str = maxi;
          }
      }
      return ans;
  }
  console.log(longest_str_in_array(["ab", "a", "abcd"]));

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */