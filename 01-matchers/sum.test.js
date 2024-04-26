//create test js files for actual js file write tests, then run "npm install --save-dev jest" for jest 
//javascript tests have to be defined under it or test block with callback to actual method ,
//two parameters required first description to test and second a callback to actual test 
const sum = require("./sum");

//Both test are same with it and test 
it("Test Sum method should add 1+2 to equal to 3", () => {
    const result =  sum(1,2);
    expect(result).toBe(3);
})

 
test("Test Sum method should add 1+2 to equal to 3", () => {
    const result =  sum(1,2);
    expect(result).toBe(3);
})

//toBe is a matcher 

//There is a lot of matcher defined for expect https://jestjs.io/docs/expect

//for example there are two matchers toBe and toEqual ...Whats the difference??

//also we can group common test together in something called describe 


describe("example tests " , () => {
    it("1+2 should be equal to 3", () => {
        const result =  sum(1,2);
        expect(result).toBe(3);
    })

    it("object assignment", () => {
        const obj = {};
        //This below one will fail compares references
        //expect(obj).toBe({});
        //But below one will succeed where we want to compare values inside object
        expect(obj).toEqual({});
    })
})

//matchers which deal with truthy or falsey values
describe("truthy or falsey", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy(); //opposite of the actual behaviour of truthy with not before toBeTruthy method call
        expect(n).toBeNull();
        expect(n).not.toBeUndefined();
    })
})

describe("truthy or falsey", () => {
    it("0", () => {
        const n = 0;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy(); 
    })
})

describe("truthy or falsey", () => {
    it("", () => {
        const n = "";
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy(); 
    })
})

describe("numbers" , () => {
    it("two plus two", () => {
        const val = 2 + 2;
        expect(val).toBe(4);
        expect(val).toBeGreaterThan(3);
        expect(val).toBeLessThan(5);
        expect(val).toBeGreaterThanOrEqual(4);
        expect(val).toBeLessThanOrEqual(5);
    })

    it("adding floats", () => {
        const val = 0.1 + 0.2;
        expect(val).toBeCloseTo(0.299999999999);
        
    })
})

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/) //regex
    })
})

describe("arrays", () => {
    const shoppingList = [ 'diapers', 'cleaners', 'trashcans'];
    it("contain matcher check", () => {
        expect(shoppingList).toContain('diapers');
    })
})

//check for excpetions

function compileAndriodCode() {
    throw new Error("you are using the wrong JDK")
}
describe("exceptions", () => {
    it("compiling andriod goes as expected", () => {
        expect(() => compileAndriodCode()).toThrow();
        expect(() => compileAndriodCode()).toThrow(Error); //Both are correct, second specify the Error
        expect(() => compileAndriodCode()).toThrow("you are using the wrong JDK"); // this also works to check the message
    })
})
//check out other matchers here 
//https://jestjs.io/docs/expect