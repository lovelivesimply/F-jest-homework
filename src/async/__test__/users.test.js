import axios from "axios";
import getUsers from "../users";

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", () => {
    // TODO 13: add async test with manual mock
    jest.mock("axios");
    const users = [{ id: 1, name: "jest" }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    return expect(getUsers()).resolves.toBe(users);
  });
});
