// IMPORT MODULES under test here:
// import { example } from '../example.js';

// const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

import { add, sub, mult, div } from '../util.js';

const test = QUnit.test;

test('returns 3 if passed 1 and 2', (expect) => {
    const expected = 3;
    const actual = add(1, 2);
    expect.equal(actual, expected);
});

test('returns 6 if passed 8 and 2', (expect) => {
    const expected = 6;
    const actual = sub(8, 2);
    expect.equal(actual, expected);
});

test('returns 12 if passed 3 and 4', (expect) => {
    const expected = 12;
    const actual = mult(3, 4);
    expect.equal(actual, expected);
});

test('returns 7 if passed 42 and 6', (expect) => {
    const expected = 7;
    const actual = div(42, 6);
    expect.equal(actual, expected);
});