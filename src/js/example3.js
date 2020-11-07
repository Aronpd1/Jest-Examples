// More functions used to test Jest matchers
const functions = {
    getAge: (name, age) =>{
        return `${name} is ${age} years old`
    },
    add: (a,b) => a+b,
    isNull: () => null,
    isUndefined: () => undefined,
    compileAndroidCode: () => {
        throw new Error('Wrong JDK selected');
    } 
}

module.exports = functions;