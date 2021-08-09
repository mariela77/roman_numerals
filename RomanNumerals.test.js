const { convert } = require('./src/Converter')


test('convert 1 to roman number', () => {
    expect(convert(1)).toBe('I');
});

test('convert 2 to roman number', () => {
    expect(convert(2)).toBe('II');
});


test('convert 3 to roman number', () => {
    expect(convert(3)).toBe('III');
});

test('convert 4 to roman number', () => {
    expect(convert(4)).toBe('IV');
});

test('convert 5 to roman number', () => {
    expect(convert(5)).toBe('V');
});

test('convert 9 to roman number', () => {
    expect(convert(9)).toBe('IX');
});

test('convert 10 to roman number', () => {
    expect(convert(10)).toBe('X');
});

test('convert 30 to roman number', () => {
    expect(convert(30)).toBe('XXX');
});

test('convert 40 to roman number', () => {
    expect(convert(40)).toBe('XL');
});

