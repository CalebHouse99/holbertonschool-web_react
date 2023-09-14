import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('utils functions', () => {
    test('getFullYear returns current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
    test('getFooterCopy returns "Holberton School" when argument is true', () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
    });
    test('getFooterCopy returns "Holberton School main dashboard" when argument is false', () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    }); 
    test('getLatestNotification returns "<strong>Urgent requirement</strong>"', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong>");
    });
});