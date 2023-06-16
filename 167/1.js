for (let i=0;i<=100; i++){
 console.log(i);
}

//z2
for (let i=100; i>=0; i--){
 console.log(i);
}

//z3
for (let i=0;i<=100; i++){
 if (i%2==0){
  console.log(i);
 }
}
//z4
let a=[];
for (let i=1; i<=10; i++){
 a.push('x');
}

//z5
let b=[];
for(let i=0; i<=10; i++){
 b.push(i);
}

//z6
let a1=[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17];
for (let i=0; i<=a1.length; i++){
 if (a1[i]>=0 || a1[i]<=10){
  console.log(a1[i]);
 }
}

//z7
let a2=[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17];
for (let i=0; i<=a2.length; i++){
 let g=a1[i];
 if (g[0]==5 || g[1]==5){
  console.log(a1[i]);
 }
}
//z8
let a3=[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17];
sum=0;
for (let i=0; i<=a3.length; i++){
sum+=a3[i];
}
console.log(sum);
//z9
let a4=[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17];
sum1=0;
for (let i=0; i<=a4.length; i++){
sum1+=a4[i]**2;
}
console.log(sum1);

//z10
let a5=[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17];
sum2=0;
for (let i=0; i<=a5.length; i++){
sum2+=a5[i];
}
console.log(sum2/a5.length);

//z11
let aa=7;
let f=1;
for (let i=1; i<=aa; i++){
f*=i;
}
console.log(f);
//z12
let ar3=[];
for (let i=10; i>=0; i--){
 ar3.push(i);
}

//z13
let a6=[1,-2,3,4,5,6,7,8,-9,0,-10,-11,-12,13,14,15,16,17];
let summ=0;
for(let i=0; i<=a6.length; i++){
 if(a6[i]>=0){
  summ+=a6[i];
 }
}
console.log(summ);

//z14
let arr4 = [10, 20, 30, 50, 235, 3000];
let g1='';
for (let i=0; i<=arr4.length; i++){
 g1=String(arr4[i]);
 if (g1[0]==1 || g1[0]==2 || g1[0]==5){
  console.log(g1);
 }
}

//z15
let arr5 = [10, 20, 30, 50, 235, 3000];
for (let i=arr5.length; i>=0; i--){
 console.log(arr5[i]);
}

//z16
let arr6=[0,1,2,3,5,6,7,8,9,10, 12];
for (let i=0; i<=arr6.length; i++){
 if (arr6[i]==i)
 {
  console.log(i);
 }
}
//z17
let arr11 = [10, 1, 30, 50, 235, 3000];

for (let i = 0; i <= arr11.length-1; i++) {

document.write(arr11[i] + '<br>');

}

//z19
let dni=['ponedelnik', 'vtornik', 'creda', 'chetverg', 'pyatny4a', 'cybbota', 'vockrecenye'];
for (let i=0; i<=dni.length; i++){
console.log(dni[i]);
}

//z21
// let o1 = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// let pro4=0;
// for (let i=0; i<=o1.length; i++){
//  pro4=o1[i]/10+o1[i];
//  o1[i]=pro4;
// }
// console.log(o1);
//z22
let o1 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
let pro4=0;
for (let i=0; i<=o1.length; i++){
 if ( o1<=400){
 pro4=o1[i]/10+o1[i];
 o1[i]=pro4;
 }
}
console.log(o1);
//z23
let a22=[1,2,3,4,5];
let a23=[6,7,8,9,10];
let fa={};
for (let i=0; i<=4; i++){
 let key=a22[i];
 let value=a23[i];
 fa[key]=value;
}
console.log(fa);
//z24
let fa1 = {1: 6, 2: 7, 3: 8, 4: 
	9, 5: 10}; 
 let sum122=0;
 let sum111=0;
 for (let i=0; i<=fa.length; i++)
{
sum111+=fa.key;
sum122+=fa[i];
}
console.log(sum111/sum122);
//z25
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];
for (let key in obj) {
arr1.push(key);
arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);
//z26
let ddd = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr7 = [];
for (let key in ddd){
let g=String(ddd[key]);
if (g[0]==1 || g[0]==2){
 arr7.push(ddd[key]);
}
}
//z27
let dd1 = ['a', 'b', 'c', 'd', 'e'];
let fa3 = {};
for (let i=0; i<=dd1.length;i++) {
fa3[i]=dd1[i];
}
console.log(fa3);
//z28
tozesamoe
