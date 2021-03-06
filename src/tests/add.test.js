const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should greet using name', () => {
    const result = generateGreeting("Ty");
    expect(result).toBe("Hello Ty!");
});

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous!");
});