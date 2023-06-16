let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i=0; i<=arr.length; i++){
 if (arr[i]=='c'){
  console.log('+++');
 }
 else{
  console.log('---');
 }
}


//z2
let a=17;
let g=0;
for (let i=1; i<=a; i++){
 if (a%i==0){
g++;
 }
}
if (g==2){
 console.log('+++');
}
else{
 console.log('---');
}