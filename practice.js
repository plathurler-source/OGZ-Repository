const nums=[1,2,3];
nums.forEach(n => console.log("Number:", n));

const nums=[1,2,3];
const doubled=nums.map(n => n * 2);
console.log(doubled);

const nums=[1,2,3,4,5];
const evens=nums.filter(n=> n % 2 === 0);
console.log(evens);

const nums=[5,10,15];
const total=nums.reduce((acc, curr,) => acc + curr, 0);
console.log(total);
