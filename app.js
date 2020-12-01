const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("tiny"));

const users = [
  {
    id: 1,
    name: "Clara",
    title: "Mother",
  },
  {
    id: 2,
    name: "Roberth",
    title: "Father",
  },
  {
    id: 3,
    name: "Roberth Jr",
    title: "Son",
  },
  {
    id: 4,
    name: "Clara Jr",
    title: "Daughter",
  },
  {
    id: 5,
    name: "Angela",
    title: "Daughter",
  },
  {
    id: 6,
    name: "James Jr",
    title: "Son",
  },
  {
    id: 7,
    name: "James",
    title: "Father",
  },
  {
    id: 8,
    name: "Sam",
    title: "Father",
  },
  {
    id: 9,
    name: "Sam Jr",
    title: "Son",
  },
  {
    id: 10,
    name: "Deborah",
    title: "Daughter",
  },
];

app.get("/api/v1/members", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("running!");
});

module.exports = app;
