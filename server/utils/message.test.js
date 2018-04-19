var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'FromValue';
    var text = 'TextValue';
    var message = generateMessage(from, text);
    
    expect(message).toInclude({from,text});
    expect(typeof(message.createdAt)).toBe('number');
  });
});
