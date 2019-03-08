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

server.post("/users", async (req, res) => {
  const newUser = req.body;
  try {
    const createdUser = await Users.insert(newUser);
    console.log(createdUser);
    if (createdUser) {
      res.status(200).json({
        message: "New user created successfully in the database.",
        createdUser
      });
    } else {
      res
        .status(404)
        .json({ message: "The user could not be created in the database." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error creating the user in the database.",
      error
    });
  }
});

server.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await Users.remove(req.params.id);
    if (deletedUser) {
      res
        .status(200)
        .json({
          message: "The user was deleted successfully from the database",
          numDeleted: deletedUser
        });
    } else {
      res
        .status(404)
        .json({
          message: "The user could not be deleted in the database at this time."
        });
    }
  } catch (user) {
    res.status(500).json({
      message: "There was an error deleting the user in the database.",
      error
    });
  }
});

module.exports = server;
