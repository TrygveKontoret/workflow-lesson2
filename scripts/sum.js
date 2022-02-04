export const sum = (a, b) => {
    return a + b;
};

export const subtract = (a, b) => {
    return a - b;
};

export const divide = (a, b) => {
    return a / b;
};

export const multiply = (a, b) => {
    return a * b;
};

export const cloneObject = (object) => {
    return {...object};
};

const Person = {
    name: 'Nko',
    age: 12,
};

let niko = cloneObject(Person);