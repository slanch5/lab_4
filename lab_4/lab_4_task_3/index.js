
//max value in array
function maxvalueinarray(array) {
    let maxvalue = array[0];
    

  
    for (var i = 1; i < array.length; i++) {
      if (array[i] > maxvalue) {
        maxvalue = array[i];
      }
    }
  
    return maxvalue;
  }
  
  
  let numbers = [12, 45, 78, 34, 56, 90, 23];
  
  
  let maxvalue = maxvalueinarray(numbers);
  alert("maxvalue in array : " + maxvalue);
  