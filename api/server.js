const express = require("express");
const server = express();
server.use(express.json());

const Users = require("../users/usersModel.js");

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/users", async (req, res) => {
  try {
    const users = await Users.getAll();
    if (users) {
      res
        .status(200)
        .json({ message: "The users were retrieved successfully.", users });
    } else {
      res
        .status(404)
        .json({ message: "No users could be found in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the users in the database.",
      error
    });
  }
});

module.exports = server;
