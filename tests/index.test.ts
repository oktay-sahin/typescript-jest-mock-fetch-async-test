import { getTelegramData } from "../src/index";

jest.mock("../src/index", () => ({
  getTelegramData: jest.fn(),
}));

describe("getTelegramData", () => {
  it("should fetch Telegram data", async () => {
    const mockData = { temp: "oktay" };
    (getTelegramData as jest.Mock).mockResolvedValue(mockData);

    const data = await getTelegramData();

    console.log(`data`);
    console.log(data);

    console.log("------------------");

    console.log(`mockData`);
    console.log(mockData);

    expect(data).toEqual(mockData);
  });
});
