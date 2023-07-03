const productOfArry = numbers => {return numbers.reduce((acc, curr) => acc * curr)}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const test1 = [1, 2, 3, 4, 5]
const test2 = [2, 8, 10]
const test3 = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1]

console.log(productOfArry(nums))
console.log(productOfArry(test1))
console.log(productOfArry(test2))
console.log(productOfArry(test3))
