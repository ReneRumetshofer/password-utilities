# 🔐 Password Utils

A library for generating and validating strong passwords. Useful for authentication flows, form validations, and anywhere secure passwords are needed.

---

## ✨ Features

- Generate strong passwords with customizable length
- Validate if a given password is strong

---

## 📦 Installation

### Using npm
```bash
npm install password-utils
```

### Using yarn

`yarn add password-utils`

## Usage
### Importing

```
// ES Modules
import { generateStrongPassword, isStrongPassword } from 'password-utils';

// CommonJS
const { generateStrongPassword, isStrongPassword } = require('password-utils');
```

### generateStrongPassword

Generates a strong password with upper/lowercase letters, numbers, and symbols.

Passwords generated with this function are always checked against `isStrongPassword`.

```
const password = generateStrongPassword();         // Default length: 12
const longPassword = generateStrongPassword(20);   // Custom length
```

### isStrongPassword

Validates if a password meets the following criteria:

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (!@#$%^&*()_+)

```
const valid = isStrongPassword('Abcdef1!');
console.log(valid); // true

const invalid = isStrongPassword('weakpass');
console.log(invalid); // false
```