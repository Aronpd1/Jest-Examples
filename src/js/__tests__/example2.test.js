const users = require('../example2'); // Import the functions to test from their source file

// Use this regular expression to verify the email string follows the format: anystring@anystring.anystring
const regularExpression = /\S+@\S+\.\S+/; 

// New test cases updated to output one test case per object. Useful if you need to know the index of the object failing the assertion.
test.each(users)('Element: #%# The id parameter should contain Integers only. ', (user) => {
  expect(typeof user.id).toBe("number"); // "typeof" checks both that parameter is defined and the type is what we expected
  expect(user.id%1).toBe(0); // Integers dont leave reminder if divided by 1
});

test.each(users)('Element: #%# The first_name parameter should contain Strings only. ', (user) => {
  expect(typeof user.first_name).toBe("string");
});

test.each(users)('Element: #%# The last_name parameter should contain Strings only. ', (user) => {
  expect(typeof user.last_name).toBe("string");
});

test.each(users)('Element: #%# The email parameter should contain emails only. ', (user) => {
  expect(typeof user.email).toBe("string");
  expect(regularExpression.test(user.email)).toBe(true);
});

/* 

The following (old) test may still be useful in case there is no need to know the specific object failing.

test('The id parameter should contain Integers only', () => {
  users.forEach((user, index, array) => {
    expect(typeof user["id"]).toBe("number"); // "typeof" checks both that parameter is defined and the type is what we expected 
    expect(user["id"]%1).toBe(0); // Integers dont leave reminder if divided by 1
  });
});

test('The first_name parameter should contain Strings only', () => {
  users.forEach((user, index, array) => {
    expect(typeof user["first_name"]).toBe("string");
  });
});

test('The last_name parameter should contain Strings only', () => {
  users.forEach((user, index, array) => {
    expect(typeof user["last_name"]).toBe("string");
  });
});

test('The email parameter should contain emails only', () => {
  users.forEach((user, index, array) => {
    expect(typeof user["email"]).toBe("string");
    expect(regularExpression.test(user["email"])).toBe(true);
  });
});

*/