// let arr = [];

// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }

// console.log(arr); 


//z2
// let a=[];
// for (let i=1; i<=10; i++){
//  a.push('x');
// }
// console.log(a);

//z3
let a=[1,2,3,4,5,-5,-6,-7];
let b=[];
for (let i=1; i<=a.lenght-1; i++){
 if (a[i]>=0){
 a.push('x');
 }
 else {
  continue;
 }
}
console.log(a);