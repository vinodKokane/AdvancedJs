// - make one object who contain your detail like - name,age,multiple vehicles -->
let details = {
    name: "Vinod",
    age: 32,
    bike: "discover"
}

// -name,and one function print your name and then do below given task
function print() {
    console.log("Hi My Name is : " + details.name);
}
print();
console.log("---------------------------------------------------------");
// 1. print all value of your details object
function displayAll() {
    let a = Object.values(details);
    console.log(a);
}
displayAll();
console.log("---------------------------------------------------------");

// 2. add a function name printAge inside object who print age from outside
function printAge() {

}
console.log("---------------------------------------------------------");

// 3. get all key
console.log(Object.keys(details));
console.log("---------------------------------------------------------");

// 4. get all value
console.log(Object.values(details));
// 5. add one key for city name and store your city name on it  from outside
function addCity(data, city) {
    data.city = city;
}
addCity(details, "nashik");
console.log(details)
console.log("---------------------------------------------------------");


// 6. delete age key from object
console.log("delete age key from object---------------")
function removeKey() {
    delete details["age"];
}
removeKey();
console.log(details)
console.log("---------------------------------------------------------");
// 7. make one function name addAge who print age with add some year which one pass by user
function addAge(age, year) {
    details.age = age + ":" + year;
    console.log(details)
}

addAge(32, "2015");

console.log("---------------------------------------------------------");
