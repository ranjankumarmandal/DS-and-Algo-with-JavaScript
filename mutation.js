// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
   let result = false;
   let arr1 = arr[0].toLowerCase().split("");
   let arr2 = arr[1].toLowerCase().split("");
   let count = 0;
   
   for(let i = 0; i < arr2.length; i++) {
       if(arr1.includes(arr2[i])) {
           count++;
       }
   }

   if(count == arr2.length) {
       result = true;
   }

   return result;
}
  
  console.log(mutation(["hello", "Hello"]));