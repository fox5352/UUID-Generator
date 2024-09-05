/**
 * Generates a random hexadecimal character.
 * @returns {string} A single character string containing a random hexadecimal digit (0-9 or a-f).
 */
export function getRandomHexadecimalChar() {
    const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', "c", "d", 'e', 'f'];
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * Generates a random variant character for UUID.
 * @returns {string} A single character string containing either '8', '9', 'a', or 'b'.
 */
function getRandomVariantChar() {
    const list = ['8', '9', 'a', 'b'];
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * Generates a UUID (Universally Unique Identifier) version 4.
 * @returns {string} A string representing a version 4 UUID.
 * @example
 * // returns a string like "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 * generateUUID();
 */
export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split("").map(char => {
        switch (char) {
            case "x":
                return getRandomHexadecimalChar();
            case 'y':
                return getRandomVariantChar();
            default:
                return char;
        }
    }).join("");
}