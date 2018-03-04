/*
testing from jasmine
the testing has failure, but I tried
*/

var request = require('request');
var bodyParser = require('body-parser');
describe('calc', () => {
  it('should multiply 2 and 2', () => {
    expect(2*2).toBe(4);
  });
});

describe('get messages', () => {
  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
        console.log(res.body);
        expect(res.statusCode).toEqual(200);
        done();
    });
  });
});
