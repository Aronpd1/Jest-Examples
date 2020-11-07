// Several examples of the different Jest matchers.
const functions = require('../example3')

test('value is defined',() => {
    expect(functions.getAge("Rudi",35)).toBeDefined();
});

test('2+2 = 4', () => {
    expect(functions.add(2,2)).toBe(4);
    expect(functions.add(2,2)).toEqual(4);
    expect(functions.add(2,2)).toBeGreaterThan(3);
    expect(functions.add(2,2)).toBeGreaterThanOrEqual(3.5);
    expect(functions.add(2,2)).toBeLessThan(5);
    expect(functions.add(2,2)).toBeLessThanOrEqual(4.5);
});

test('floating point approximation',() => {
    expect(functions.add(0.5,0.33)).toBeCloseTo(0.83);
});

test('object verification',() => {
    const data = {one: 1};
    data['two'] = 2;
    // toBe is used for value comparison, while toEqual is for objects
    expect(data).toEqual({one: 1, two: 2});
});

test('object verifcation (not equals)',() => {
    const data = {one: 1};
    expect(data).not.toEqual({one: 1, two: 2});
});

test('is Null',() => {
    expect(functions.isNull()).toBeFalsy();
    expect(functions.isNull()).toBeDefined();
});

test('is Undefined',() => {
    expect(functions.isUndefined()).toBeFalsy();
    expect(functions.isUndefined()).toBeUndefined();
});

test('is zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('the shopping list contains beer', () => {
    const shoppingList = [
        'napkins',
        'milk',
        'beer',
        'pc master race'
    ]
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

test('error throwing works as expected', () => {
    expect(functions.compileAndroidCode).toThrow();
    expect(functions.compileAndroidCode).toThrow(/JDK/);
});