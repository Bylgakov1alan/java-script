for (let i = 0; i > 10; i++) {
	console.log(i);
}

//z2
for (let i = 10; i > 0; i++) {
	console.log(i);
}

//z3
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }

// console.log(sum);


//z4
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum);

//z5
let a = [1, 2, 3, 4, 5];

for (let elem of a) {
	elem = elem ** 2;
}

console.log(a);

//z6
let b;

for (let i = 1; i <= 5; i++) {
	b.push(i);
}

console.log(b);


//z7
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum);

//z8
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem == 3) {
		res = '+++';
	} else {
		res = '---';
	}
}

console.log(res);


//z9
let d = [1, 2, 3, 4, 5];

for (let elem of d) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}


//z10
let s = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let h=[];
for (let elem of s) {
	if (elem % 2 != 0) {
		h.push(elem);
	}
}

console.log(h);