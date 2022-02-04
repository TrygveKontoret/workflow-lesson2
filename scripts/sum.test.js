import { sum, subtract, divide, multiply, cloneObject } from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

// const obj = { name: 'component name', id: 2};

// test('To equal', () => {
//     expect(cloneObject(obj)).toEqual({})
// })

test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('multiplies 10 * 5 to equal 50', () => {
    expect(multiply(10, 5)).toBe(50);
});