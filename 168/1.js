let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

//z2
let arr1 = [[1, 2], [3, 4], [5, 6]];
let sum=0;
for(let i=0; i<=2;i++){
 for(let k=0; k<=1; k++){
  sum+=arr1[i][k];
 }
}
console.log(sum);