import { sum, helloWorld } from "./index";

test("sum function", () => {
  expect(sum(1, 2)).toBe(3);
});

test("helloWorld function", () => {
  expect(helloWorld()).toBe("Hello World!");
});
