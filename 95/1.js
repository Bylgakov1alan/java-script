let a=prompt('введите двухзначное число');
let b=a/10;
let c=a%10;
if(a>10 && a<99)
{
 let a1=b+c;
 if(a>=10)
 {
  console.log('сумма двухзначная'+a1);
 }
 else{
  console.log('сумма однозначная'+a1);
 }
}