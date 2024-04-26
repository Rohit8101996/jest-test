// // authentication.js

// const mailer = require('./mailer');

// class authentication {
//   register() { // The method i am trying to test
//     // ...

//     mailer.send();
//   }
// }

// const authentication = new Authentication();

// module.exports = authentication;


// // mailer.js

// class Mailer {
//   send() { // The method i am trying to mock
//     // ...
//   }
// }


// const mailer = new Mailer();

// module.exports = mailer;


// // authentication.test.js

// const authentication = require('../../services/authentication');

// const authentication = require('../../services/authentication');
// const mailer = require('../../services/mailer');
// jest.mock('../../services/mailer', () => ({send: jest.fn()})); 

// describe('Service Authentication', () => {
//   describe('register', () => {
//     test('should send a welcome email', async() => {
//           const p = Promise.resolve()
//           mailer.send.mockImplementation(() =>  p) 
//           authentication.register(knownUser);
//           await p;
//           expect(mailer.send).toHaveBeenCalled;
//         });
//   });
// });

//above is one of example similar to verify in mockito in java junit , in jest javascript

// one more good example on how to mock a different service method
// https://medium.com/welldone-software/jest-how-to-mock-a-function-call-inside-a-module-21c05c57a39f
