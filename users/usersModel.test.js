const db = require("../data/dbConfig.js");
const Users = require("./usersModel.js");

describe("users model", () => {
  afterEach(async () => {
    await db("users").truncate(); // This prevents our test server from having TONS of data added every time we run it
  });

  describe("insert()", () => {
    it("should insert the provided user into the db", async () => {
      const user = await Users.insert({
        username: "abc",
        password: "password"
      });
      expect(user.username).toBe("abc");
    });
  });

  describe("delete()", () => {
    it("should deleted the user selected", async () => {
      const user = await Users.insert({
        username: "xyz",
        password: "password"
      });
      const deletedUser = await Users.remove(user.id);
      expect(deletedUser).toBe(1);
    });

    it("should not update when sent an invalid id", async () => {
      const deletedUser = await Users.remove(100000);
      expect(deletedUser).toBe(0);
    });
  });
});

// it("should return 200 OK", async () => {
//   const newUser = {
//     username: "newUserx",
//     password: "password"
//   };
//   const res = await request(server)
//     .post("/users")
//     .send(newUser);
//   expect(res.status).toBe(200);
// });
