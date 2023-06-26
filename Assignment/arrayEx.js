// -> make one array who have value from 1 to 10
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. print 9th and 10th element of array
console.log(a[8] + " " + a[9]);
// 2. print every element of array by map reduce and for loop
// 1 using Map
console.log("Using Map Function---------------")
a.map((e) =>
    console.log(e));

// 2 using reduce
console.log("Using Reduce Function-----------------")
let intialValue = 0;
let usingReduce = a.reduce((lastelement, element) => {
    console.log(element);
}, intialValue);
usingReduce;

// 3 using for Loop
console.log("Using For Loop---------------------")
console.log("Array------")
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
// 3. change a value of 6th element with 100
console.log("3. change a value of 6th element with 100");
for (let i = 0; i < a.length; i++) {
    if (a[i] == 6) {
        a[i] = 100;
    }
    console.log(a[i]);
}

// 4. print a array till element value not gratter then 100
console.log("print a array till element value not gratter then 100");
for (let j = 0; j < a.length; j++) {

    if (a[j] >= 100) {
        console.log("---------")
        continue;
    }
    console.log(a[j]);
}


// 5. add 1 in every element of an array
console.log("add 1 in every element of an array---")

let arr = a.map((e) => {
    return e + 1;
})
console.log(arr);

// 6. add one 0 in start of array
console.log("add one 0 in start of array");
console.log(0, ...a);
// 7. add one 99 in end of array
console.log("add one 99 in end of array")
console.log("[", ...a, 99, "]");
// 8. remove 1 element from start of array
console.log("first element : ", a[0]);
a.shift();
console.log(a);
// 9. remove 1 element from end of  array
console.log("remove 1 element from end of  array")
let len = a.length - 1;
console.log(`Last element${a[len]}`);
a.pop();
console.log(a);
// 10. do sum of all value of an array with use of map, reduce and for-loop
// 1.map
console.log("Using map---------------");
let sum = 0;
a.map((e) => {
    sum += e;
})
// addition;
console.log("Addition : " + sum);

// 2.reduce
console.log("using Reduce-----------")

let initialValue = 0;
let usingReduce2 = a.reduce((last, el) => {
    return last + el;
}, initialValue);

console.log("sum using reduce :" + usingReduce2);

// 3. using for loop
console.log("using for loop-----------")
let sum1 = 0;
for (let i = 0; i < a.length; i++) {
    sum1 += a[i];
}
console.log("Sum : " + sum1)
// 11. sort a array in acending decending
let arr1 = [10, 20, 30, 20, 40, 10, 30, 40, 10, 30];
// ascending order
console.log("ascending order-------------")
arr1.sort((a, b) => {
    return a - b;
})
console.log(arr1)
console.log("decending order-------------")
arr1.sort((a, b) => {
    return b - a;
})
console.log(arr1)


// 12. reverce an array with use of method
console.log("reverce an array with use of method----------")
let arr3 = [2, 3, 1, 2, 3, 2, 3, 4, 1, 5, 6, 4, 7, 1, 0, 9];
function reverseArray(array) {
    return array.reverse();
}
let reverseArr = reverseArray(arr3);
console.log(reverseArr);

// 13. reverce an array with use of for-loop
console.log("reverce an array with use of for-loop------------------");

let arr4 = [10, 20, 30, 40, 50, 60, 70, 80];
let revarr = [];
for (let i = arr4.length-1; i >= 0; i--) {
    revarr.push(arr4[i]);
}
console.log([...revarr]);
