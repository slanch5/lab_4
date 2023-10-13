// array_sort
function array_sort(my_array) {
    
    let sort_array = my_array.sort(function(a, b) {
      return a - b; 
      
    });
    return sort_array;
  }
  
  let my_array = [5, 1, 3, 2, 4];
  let array_sorted = array_sort(my_array);
  
  alert("Відсортований масив:" + array_sorted);
  