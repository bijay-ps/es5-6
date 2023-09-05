const msg = "Hello, my name is Bijay Singh. \
I am a teacher \
I am 30 years"

// console.log(msg)

const name = "     Bijay Singh           ";
// console.log(name.trim());

const jsonString = '{"name": "Jane Doe",  "age": 30}';
console.log(jsonString);
const jsObj = JSON.parse(jsonString);
console.log(jsObj.name);

const obj = {name: "Jane Doe",  age: 30};
console.log(JSON.stringify(obj))