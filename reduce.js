 let myArray = [1,2, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const result = myArray.reduce(reducer)
console.log(result);
