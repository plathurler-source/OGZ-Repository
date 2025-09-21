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
console.log("Uppercase names" upper);