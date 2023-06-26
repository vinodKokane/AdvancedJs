let x = 100
var y = 100
const z = 100
// const m error
{
    x = 90
    y = 90
    //   z= 90 
    console.log("x1 : ", x) //___________________ point-x1
    console.log("y1 : ", y) //___________________ point-y1
    console.log("z : " + z) //___________________ point-z1
}

console.log("x2 : " + x) //___________________ point-x2
console.log("y2 : ", y) //___________________ point-y2
console.log("z2 : " + z) //___________________ point-z2

// what will print at x1- _______ 90
// what will print at y1- _______90
// what will print at z1- _______due to const it throw error
// what will print at x2-_______ 90 due to re assign the value
// what will print at y2-_______90
// what will print at z2-_______100
