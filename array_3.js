/*3) Given an array ['learn', 'css', 'nodejs']. 
Use shift, pop to display the first and last element. 
Create new array which have two elements ['learn', 'nodejs'].*/
let user_array=['learn', 'css', 'nodejs'];
let first_element_of_new_array=user_array.shift();
let second_element_of_new_array=user_array.pop();
console.log(first_element_of_new_array);
console.log(second_element_of_new_array);
let new_array=[];
new_array.push(first_element_of_new_array,second_element_of_new_array);
console.log(new_array);