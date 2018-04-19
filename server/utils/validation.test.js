const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var response = isRealString(111);
    expect(response).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var response = isRealString('      ');
    expect(response).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var response = isRealString('  test  Value  ');
    expect(response).toBe(true);
  });
});
