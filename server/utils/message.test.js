var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'GenerateMessageFrom';
    var text = 'TextValue';
    var message = generateMessage(from, text);

    expect(message).toInclude({from,text});
    expect(typeof(message.createdAt)).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'GenerateLocationFrom';
    var latitude = '1';
    var longitude = '0';
    var url = 'https://www.google.com/maps?q=1,0';
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toInclude({from,url});
    expect(typeof(locationMessage.createdAt)).toBe('number');
  });
});
