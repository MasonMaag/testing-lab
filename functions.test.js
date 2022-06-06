const {
    returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

test('this should return 2', ()=>{
    expect(returnTwo()).toBe(2);
});

test('this should return a string"Hello, name" specified.', ()=>{
    expect(greeting('James')).toBe('Hello, James');
    expect(greeting('Jill')).toBe('Hello, Jill');
});


describe('Math functions', ()=>{
test('this test should return the sum of two numbers', ()=>{
    expect(add(1,2)).toBe(3);
    expect(add(5,9)).toBe(14);
});

test('this test should return the sum of two numbers', ()=>{
    expect(multiply(10,2)).toBe(20);
    expect(multiply(5,5)).toBe(25);
});

test('this test should return the sum of two numbers', ()=>{
    expect(divide(10,2)).toBe(5);
    expect(divide(4,2)).toBe(2);
});

test('this test should return the sum of two numbers', ()=>{
    expect(subtract(10,2)).toBe(8);
    expect(subtract(4,2)).toBe(2);
});
});