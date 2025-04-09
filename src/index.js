const utils = module.exports;

utils.generateStrongPassword = function (length = 12) {
    const allowedPasswordCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let strongPassword = Array
    .from(
        { length },
        () => {
            const randomAllowedPasswordCharacterIndex =
            Math.floor(Math.random() * allowedPasswordCharacters.length);
            const randomAllowedPasswordCharacter =
            allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
            return randomAllowedPasswordCharacter;
        })
    .join('');

    while (!utils.isStrongPassword(strongPassword)) {
        strongPassword = utils.generateStrongPassword(length);
    }

    return strongPassword;
}

utils.isStrongPassword = function(password) {
    if (password.length < 8) {
        return false;
    }
    const isPasswordStrong = /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*()_+]/.test(password);
    return isPasswordStrong;
}

