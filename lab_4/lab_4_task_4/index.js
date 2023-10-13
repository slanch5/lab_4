let numbers = [2, 3, 4, 5];
let number = 1;
function multiplication(numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
      number *= numbers[i];
    }
  
    return number;
  }
  
 
  
  let res_mult = multiplication(numbers);
  alert("result: " + res_mult);
  