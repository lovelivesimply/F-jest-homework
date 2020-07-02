import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";

jest.mock("../recipient");

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const v = new VaccineTest();
    v.inject();
    expect(Recipient).toHaveBeenCalledTimes(1);
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    Recipient.mockImplementation(() => ({
      getHasAntibodies: () => true,
    }));
    const v = new VaccineTest();
    expect(v.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    Recipient.mockImplementation(() => ({
      getHasAntibodies: () => false,
    }));
    const v = new VaccineTest();
    expect(v.test()).toBe("Vaccine Test Failed");
  });
});
