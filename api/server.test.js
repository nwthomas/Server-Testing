const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig.js");

describe("server.js", () => {
  afterEach(async () => {
    await db("users").truncate(); // This prevents our test server from having TONS of data added every time we run it
  });

  it("should run tests", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it('should return { api: "up" }', async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });

  describe("GET /users", () => {
    it("should return 200 OK", async () => {
      const res = await request(server).get("/users");
      expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/users");
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /users", () => {
    it("should return JSON", async () => {
      const res = await request(server).post("/users");
      expect(res.type).toBe("application/json");
    });
  });

  describe("DELETE /users", () => {
    it("should return JSON", async () => {
      const res = await request(server).delete("/users/:id");
      expect(res.type).toBe("application/json");
    });

    it("should return a 404 error when sent an id for a user that does not exist", async () => {
      const res = await request(server).delete("/users/100000000");
      expect(res.status).toBe(404);
    });
  });
});
