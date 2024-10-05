import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

test("capitalizing the first character", () => {
  expect(capitalize("home")).toBe("Home");
});

test("reversing a string", () => {
  expect(reverseString("home and done!")).toBe("!enod dna emoh");
});

test("performing  calculation", () => {
  expect(calculator.add(10, 3)).toEqual(13);
  expect(calculator.substract(10, 3)).toEqual(7);
  expect(calculator.multiply(10, 3)).toEqual(30);
  expect(calculator.divide(10, 2)).toEqual(5);
});

test("ciphering a string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzing array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
