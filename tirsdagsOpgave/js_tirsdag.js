//const { response } = require("express");

console.log("opg 1----------------------------------------")
//1) Using existing functions that takes a callback as an argument
//a) Using the filter method:
let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Mads"];
let onlyAArray = nameArray.filter((name) => name.includes("a"))
console.log(onlyAArray)

//b) Using the map method:
let reverseNameArray = nameArray.map((name) => name.split("").reverse().join(""))
console.log(reverseNameArray)

console.log("opg 2----------------------------------------")

// 2) Implement user-defined functions that take callbacks as an argument
// a) My own filter
function myFilter(array, callback) {
    let filteredArray = [];
    array.forEach(element => {
        if (callback(element) === true) {
            filteredArray.push(element)
        }
    });
    return filteredArray;
}

function mySort(name) {
    return name.includes("a");
}
console.log(myFilter(nameArray, mySort));

// b) My own map
function myMap(array, callback) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}
function reverseNames(name) {
    return name.split("").reverse().join("")
}
reverseNameArray = myMap(nameArray, reverseNames)
console.log(reverseNameArray)

console.log("opg 3----------------------------------------")

// 3) Getting really comfortable with filter and map
// a) 
var numbers = [1, 3, 5, 10, 11]
var result = [4, 8, 15, 21, 11]

// b) 
console.log(nameArray.map(e => `<a href="">${e}</a>`).join("\n"))

// c)
var persons = [{ name: "Hassan", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Boline", phone: "79345" }];
console.log(persons.map(p => `${p.name} ${p.phone}`).join("\n"))


console.log("opg 4----------------------------------------")

// 4) Reduce
// a)
var all = ["Hassan", "Peter", "Carla", "Boline"];
console.log(all.join("#"))

// b)
var numbers2 = [2, 3, 67, 33];
console.log(numbers2.reduce(function (total, num) {
    return total + num
}))

// c)
var members2 = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

let length = members2.length;
let gennemsnit = members2.reduce(function (a, b) {
    let sammenlagtAlder = (a + b.age);
    return sammenlagtAlder;
}, 0);
console.log(gennemsnit / length)

