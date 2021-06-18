/*5 *) Given object {js: 'test', jq: 'hello', css: 'world'}. 
Get an array of its keys, and an array of its value,*/
let obj={
    js: 'test',
    jq: 'hello',
    css: 'world'
}
let array_keys=Object.keys(obj);
let array_values=Object.values(obj);
console.log(array_keys);
console.log(array_values);