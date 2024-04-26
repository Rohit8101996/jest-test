//to start with mocks 
//we will create a function which we will mock 
const axios = require("axios");

const example = (items, callback) => {
    for(i =0; i< items.length; i++){
        callback(items[i]);
    }
}

//for axios mocking
const fetchData = async (id) => {
    const results = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id);
    console.log(results);
    return results.data;
}


it("mock callback", () => {
    const mockedCalledBack = jest.fn( x => x + 42);

    example([0,1], mockedCalledBack) //This means we passed array for items and mockedCalledBack to callback
    expect(mockedCalledBack.mock.calls.length).toBe(2);
    // [call1, call2]
    //mockedCalledBack has method mock where mock has lot of properties also bunch of calls
    console.log(mockedCalledBack.mock.calls);

    //mock has 2 calls for 0 and 1 
    //calls return two array with results on 0th index
    expect(mockedCalledBack.mock.calls[0][0]).toBe(0);
    
    expect(mockedCalledBack.mock.calls[1][0]).toBe(1);

    expect(mockedCalledBack.mock.results[0].value).toBe(42);

    expect(mockedCalledBack.mock.results[1].value).toBe(43);
})

it("mock return value in jest.fn()", () => {
    const mock = jest.fn(); //no function call inside

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");

    const results = mock();
    const results2 = mock();
    const results3 = mock();

    expect(results).toBe(true);
    expect(results2).toBe(false);
    expect(results3).toBe("Hello");
})

it("mock axios", async () => {
    //spyOn with  first parameter as object and with method name in another parameter
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data : {
            id: 1,
            todos: "Hello my frnds"
        }
    })
    //this will not let to place call to another api and directly return results
    
    const results = await fetchData(1);

    expect(results.id).toBe(1);
    expect(results.todos).toBe("Hello my frnds");

})