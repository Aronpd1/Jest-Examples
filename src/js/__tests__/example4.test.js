// Examples of testing API using live scenarios and mock responses
const {getPeople, isCity} = require('../example4');
const fetch = require('node-fetch');

test('call to live API (swapi) with getPeople returns data', () => {
    expect.assertions(1); 
    return getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
    })
});

test('mock response has been called', () => {
    const mock = jest.fn();
    let result = mock('mock response');

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('mock response');
});

test('mock response returns values', () => {
    const mock = jest.fn();
    mock.mockReturnValue('mock value');

    expect(mock('mock response')).toBe('mock value');
    expect(mock).toHaveBeenCalledWith('mock response');
});


test('mock response from getPeople returns data', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [1,2,3,4,5,6,7,8]
            })
        }));
    expect.assertions(5);
    return getPeople(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toEqual(1);
        expect(mockFetch).toBeCalled();
        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('https://swapi.dev/api/people');
        expect(data.count).toEqual(87);
    });
});


// Examples of test setup and closure
let db = [];
const intiDb = () => db = ['Vienna', 'London', 'San Juan', 'Medellin'];
const closeDb = () => db = [];

/*
This methods are called before/after each test is executed.
beforeEach(() => intiDb());
afterEach(() => closeDb());

If data is not going to mutate, use the following instead as they are only called once:
*/
beforeAll(() => intiDb());
afterAll(() => closeDb());

test('Vienna is in the DB', () => {
    expect(isCity('Vienna',db)).toBeTruthy();
});