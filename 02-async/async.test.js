const fetchData = require("./async");

describe("async", () => {
    // it("should return correct todo", () => {
    //     const todo = fetchData(1); // this will not work since we have async method which returns promise
    //     expect(todo.id).toBe(1);
    // })

    //Below both ways can be done handle promises
    it("should return correct todo", () => {
        fetchData(1).then(todo => {
            expect(todo.id).toBe(1);
        })
    })

    it("should return correct todo", async () => {
        const todo = await fetchData(1); 
        expect(todo.id).toBe(1);
    })
})