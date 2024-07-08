// for of loop

// array specific loop

const arr = [2,4,6,8,10]
const str = "ram is going to home"

for (const char of str) {
    // console.log(`Print one by one char: ${char}`);
}

// maps 

const map = new Map()

map.set('IN', "INDIA")
map.set('NPL', "NEPAL")
map.set('CH', "CHINA")
map.set('PAK', "PAKISTAN")
map.set('USA', "UNITED STATE OF AMERICA")

console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const obj = {
    name: 'tam',
    age: 12
}

for (const [key , val] of obj) {
    // TypeError: obj is not iterable
    // at
    // console.log(`${key} :- ${val}`);
}

