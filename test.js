import { generateUUID, getRandomHexadecimalChar } from './index.js';

describe('UUID Generator', function() {
    test('getRandomHexadecimalChar returns a valid hexadecimal character', () => {
        const validChars = '0123456789abcdef';
        const result = getRandomHexadecimalChar();
        expect(validChars).toContain(result);
    });

    test('generateUUID returns a valid UUID', () => {
        const uuid = generateUUID();
        expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    });

    test('generateUUID returns unique values', () => {
        const uuid1 = generateUUID();
        const uuid2 = generateUUID();
        expect(uuid1).not.toBe(uuid2);
    });

    test('generateUUID has correct length', () => {
        const uuid = generateUUID();
        expect(uuid.length).toBe(36);
    });

    test('generateUUID has correct structure', () => {
        const uuid = generateUUID();
        const parts = uuid.split('-');
        expect(parts.length).toBe(5);
        expect(parts[0].length).toBe(8);
        expect(parts[1].length).toBe(4);
        expect(parts[2].length).toBe(4);
        expect(parts[3].length).toBe(4);
        expect(parts[4].length).toBe(12);
    });
});
