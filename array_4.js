/*4 *) Given the 2nd array: [1,2,3,4,5,6] and [5,6,7,8,9]. 
Find all unique elements.*/
let first_array=[1,2,3,4,5,6];
let second_array=[5,6,7,8,9];
let array_of_uniaue_elements=[];
let concat_arrays=first_array.concat(second_array);
for (let item of concat_arrays) {
    if (!array_of_uniaue_elements.includes(item)) {
      array_of_uniaue_elements.push(item);
    }
  }
console.log(array_of_uniaue_elements);