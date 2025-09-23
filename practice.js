const nums1=[1,2,3];
nums1.forEach(n => console.log("Number:", n));

const nums2=[1,2,3];
const doubled=nums2.map(n => n * 2);
console.log(doubled);

const nums3=[1,2,3,4,5];
const evens=nums3.filter(n=> n % 2 === 0);
console.log(evens);

const nums4=[5,10,15];
const total=nums4.reduce((acc, curr) => acc + curr, 0);
console.log(total);

const names = ["Jack","Oguzhan","David"];
const upper = names.map(n => n.toUpperCase());
console.log("Uppercase names", upper);

//array Destructuring
const numbers=[10,20,30];
const [first,second]=numbers;

console.log(first);
console.log(second);

const [a,b,c = 100]=[1,2];
console.log(c);

//object Destructuring 
const user={id: 1, name: "Jack", age 25};
const {name,age}=user;

console.log(name);
console.log(age);

const {name:fullName} = user;
console.log(fullName);

// Spread Operator
const arr1=[1,2];
const arr2=[3,4];
const all=[...arr1, ...arr2];
console.log(all);

const user={name:"Melisa", age:22};
const clone={...user, city:"Frankfurt"};
console.log(clone);

// Rest Operator
const[first, ...others]=[1,2,3,4];
console.log(first);
console.log(others);

const {id, ...rest}={id:1, name:"Jack", age:25};
console.log(id);
console.log(rest);