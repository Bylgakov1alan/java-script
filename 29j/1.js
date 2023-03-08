// let test = '12345'; 
// let num =test.length-1;
// let sum=0;
// while (num>0) {
// sum=Number(test[num])+sum;
// num=num-1;
// }  
// alert(sum);




// let test = '12345'; 
// let num =test.length-1;
// let sum=1;
// while (num>0) {
// sum=Number(test[num])*sum;
// num=num-1;
// }  
// alert(sum);



// еще 1 массив в который обратным порядком записать все элементы
let test = '12345'; 
const t=[];
let i=0, j=test.length-1;

while(i<=test.length) {
while(j>=0){
t[i]=test[j];
j--;
i++;
  } }
alert(t);