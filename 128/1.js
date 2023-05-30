let num = 58;

if (num >= 10 || num<100) {
 let p=num%10;
 let o=num/10;
	if (p+o >= 10) {
		console.log('двухзначное число');
	} else {
		console.log('однозначное число');
	}
} else {
	console.log('не подходит число не входит в диапазон');
}