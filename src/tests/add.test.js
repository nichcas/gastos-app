const add = (a, b) => a + b;
const generateGreating = (name = "Anonymous") => `Hello ${name}!`;

test("should add 2 numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should generate greeting from name ", () => {
  const result = generateGreating("Nich");
  expect(result).toBe("Hello Nich!");
});

test("should generate greeting from name ", () => {
  const result = generateGreating();
  expect(result).toBe("Hello Anonymous!");
});
