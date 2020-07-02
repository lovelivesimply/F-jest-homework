jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    expect(1).toBe(1);
  });

  test("should reject with Error when username is invalid", () => {
    // TODO 20: add test here
    expect(1).toBe(1);
  });
});
