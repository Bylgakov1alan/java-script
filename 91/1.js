//z1
let test1 = true;
let test2 = true;

if (test1 && test2) { 
	console.log('+++');
} else {
	console.log('---');
}
//z2
if (test1 && !test2) { 
	console.log('+++');
} else {
	console.log('---');
}
//z3
if (!test1 && !test2) { 
	console.log('+++');
} else {
	console.log('---');
}
//z4
if (test1 && test2) { 
	console.log('+++');
} else {
	console.log('---');
}
//z5
if (test1 && test2 && test3) { 
	console.log('+++');
} else {
	console.log('---');
}
//z6
if (test1 || test2 && test3 ) { 
	console.log('+++');
} else {
	console.log('---');
}
//z7
if (test1 || !test2 && !test3) { 
	console.log('+++');
} else {
	console.log('---');
}