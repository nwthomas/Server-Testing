const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
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
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
  });

  describe("POST /", () => {
    it.skip("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it.skip("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
  });

  describe("PUT /", () => {
    it.skip("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it.skip("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
  });

  describe("DELETE /", () => {
    it.skip("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it.skip("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
  });
});
