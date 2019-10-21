// User token to allow user to make posts without a login mechanism on site
// Note: This is not a secure method of generating random tokens

const randomChars = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const MIN_LENGTH = 4;
const MAX_LENGTH = 8;

const getRandomTokenChars = () => {
    let tokenString = ""
    let tokenLength = getRandomInt(MIN_LENGTH, MAX_LENGTH);
    for (let i = 0; i <= tokenLength; i++) {
        tokenString += randomChars[getRandomInt(0, randomChars.length)]
    }
    return tokenString;
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = getRandomTokenChars;