// Functions to test. Basic mathematical operations.
const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

// Export the functions so they are available in Jest
module.exports = { 
    add: add,
    mul: mul,
    sub: sub,
    div: div
};