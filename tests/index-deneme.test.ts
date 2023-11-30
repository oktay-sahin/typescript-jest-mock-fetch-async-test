import { getTelegramData } from "../src/index";

// 

const exampleData = {
  ok: true,
  result: {
    id: 5917573567,
    is_bot: true,
    first_name: "DG_CRM",
    username: "Dg_crm_bot",
    can_join_groups: true,
    can_read_all_group_messages: false,
    supports_inline_queries: false,
  },
};

describe("getTelegramData deneme", () => {
  it("should get Telegram data", async () => {
    const data = await getTelegramData();

    expect(data).toEqual(exampleData);
  });
});
