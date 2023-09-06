const person = {
    fName: 'John',
    lName: 'Doe',
    age: 27,
    sex: 'Male'
}

// const first_name = person['fName']; // Pre ES6
const { fName, sex:gender  } = person; // destructuring in ES6
console.log(fName, gender);

const arr = [1,2,3,4];
const [a, ...rest] = arr;
console.log(a, rest);
