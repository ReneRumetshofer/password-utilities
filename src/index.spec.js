// import utils from './index.js';
const { generateStrongPassword, isStrongPassword } = require('./index.js');

describe('generateStrongPassword', () => {
  test('should generate a password of the correct length', () => {
    const length = 16;
    const password = generateStrongPassword(length);
    expect(password).toHaveLength(length);
  });
});

describe('isStrongPassword', () => {
  test('should validate a strong password correctly', () => {
    const strongPassword = 'Abcdef1!';
    expect(isStrongPassword(strongPassword)).toBe(true);
  });
});
