let animals;


beforeAll(() => {
    console.log("once run before executing all tests in this js file");
})

//once after completing executing tests
afterAll(() => {
    console.log("once run after executing all tests in this js file");
})


describe("animals array", () => {

    //once before start executing tests
    beforeAll(() => {
        console.log("once run before executing all tests in this describe");
    })

    //once after completing executing tests
    afterAll(() => {
        console.log("once run after executing all tests in this describe");
    })

    beforeEach(() => {
        console.log("Before each")
        animals = [ "elephant", "zebra", "tiger", "bear"];
        //Similar to junit before each in js also runs before every test call 
    })

    afterEach(() => {
        console.log("Runs after each test");
    })
    it("to add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length-1]).toBe("aligator");
    })

    it("to add animal to start of array", () => {
        animals.unshift("monkey"); 
        expect(animals[0]).toBe("monkey");
    })

    it("should have length as 4 ", () => { 
        expect(animals.length).toBe(4);
    })
})

//to not want to execute the animal array before each or any such method
// so we should define all before,after method under describe
describe("testing something else not related to animal array", () => {
    it("true should be truthy", () => {
        expect(true).toBeTruthy();
    })
    //To run only one test of file for debugging purpose use it.only
    // it.only("true should be truthy", () => {
    //     expect(true).toBeTruthy();
    // })
})