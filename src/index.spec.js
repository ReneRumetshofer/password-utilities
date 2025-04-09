const utils = require('./index.js');
const { generateStrongPassword, isStrongPassword } = utils;

describe('generateStrongPassword', () => {
  it('should generate a password of the correct length', () => {
    const length = 16;
    const password = generateStrongPassword(length);
    expect(password).toHaveLength(length);
  });

  it('should call isStrongPassword internally', () => {
    const spy = jest.spyOn(utils, 'isStrongPassword');
    
    generateStrongPassword(12);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('isStrongPassword', () => {
  it('should validate a strong password correctly', () => {
    const strongPassword = 'Abcdef1!';
    expect(isStrongPassword(strongPassword)).toBe(true);
  });
});
