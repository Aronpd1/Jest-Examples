// Import the functions to test from their source file
const importedFunctions = require('../example1');

// Test add function
test.each([[0, 0, 0], [1, 2, 3], [2, 1, 3], [-1, -1, -2], [-10, 10, 0], [999, 99, 1098], [3.14, 0.0016, 3.1416], [2.5, 5, 7.5]])(
  'FUNCTION: add(%i, %i) RETURNS: %i', (a, b, expected) => {
    expect(importedFunctions.add(a, b)).toBe(expected);
  },
);

// Test mul function
test.each([[0, 0, 0], [1, 2, 2], [2, 1, 2], [-1, -1, 1], [-10, 10, -100], [999, 99, 98901], [3.14, 0.5, 1.57], [2.5, 5, 12.5]])(
  'FUNCTION: mul(%i, %i) RETURNS: %i', (a, b, expected) => {
    expect(importedFunctions.mul(a, b)).toBe(expected);
  },
);

// Test sub function
test.each([[0, 0, 0], [1, 2, -1], [2, 1, 1], [-1, -1, 0], [-10, 10, -20], [999, 99, 900], [3.14, 0.14, 3], [2.5, 5, -2.5]])(
  'FUNCTION: sub(%i, %i) RETURNS: %i', (a, b, expected) => {
    expect(importedFunctions.sub(a, b)).toBe(expected);
  },
);

// Test div function
test.each([[0, 0, NaN], [1, 2, 0.5], [2, 1, 2], [-1, -1, 1], [-10, 10, -1], [999, 90, 11.1], [3.14, 0.10, 31.4], [2.5, 5, 0.5]])(
  'FUNCTION: div(%i, %i) RETURNS: %i', (a, b, expected) => {
    expect(importedFunctions.div(a, b)).toBe(expected);
  },
);