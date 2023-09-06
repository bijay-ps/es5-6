// const test = (a,b = 6) => {
//     const sum = a + b;
//     console.log(sum);
// }

// test(4)

// const twiceTheVal = a => a*2
// const val = twiceTheVal(50)
// console.log(val);

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const arr = [...arr1,...arr2]; // [1,...,10]

// console.log(arr);

// console.log(arr1);
// console.log(...arr1); //Based on usuage it is called either rest or spread

const [a, b, ...rests] = arr // Destructuring

// console.log(a);
// console.log(b);
// console.log(rests);

const obj1 = {
    fName: 'Ekansh',
    age: 24,
    gender: 'male'
}

// console.log('Hi my name is ' + obj1.fName, ' I am ' + obj1.age + ' years old')
console.log(`Hi my name is ${obj1.fName},
I am ${obj1.age} years old
`)

const obj2 = {
    lName: 'Kumar',
}

const commonObj = {
    ...obj1,
    ...obj2
}

// console.log(commonObj);

// const nameOfPerson = obj1.fName;
const { fName: nameOfPerson, gender:sex } = obj1;
// console.log(nameOfPerson, sex);

const state = {
    counter: 0,
    un: 'player1',
    score: 230
}

const newCopy = {
    ...state,
    un: 'Player_1'
}

// console.log(newCopy);

const updateCounter = (val) => {
    const copiedObj = {
        ...state
    }
    copiedObj.counter = copiedObj.counter + val;
    return copiedObj;
}

updateCounter(2);

// console.log(state);

