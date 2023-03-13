let a=prompt();
if(a>0 && a<31)
{
 if(a>0 && a<=10)
 {
  console.log('день в первой десятке');
 }
 else if(a>10 && a<=20)
 {
  console.log('день в второй десятке');
 }
 else if(a>20 && a<=31)
 {
  console.log('день в третьей десятке');
 }
 else{
  console.log('false');
 }
}
else{
 console.log('false');
}