const express = require("express");
const db = require("./db");

const app = express();
const port = 3040;

app.get("/", async (req, res) => {
  try {
    const data = await db.one("SELECT $1 AS value", 123);

    res.send(`Hello World! Value from DB: ${data.value}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Database error: ${err}`);
  }
});

const { qbRoutes } = require("./qb");
app.use("/qb", qbRoutes);

const { rbRoutes } = require("./rb");
app.use("/rb", rbRoutes);

const { wrRoutes } = require("./wr");
app.use("/wr", wrRoutes);

const { teRoutes } = require("./te");
app.use("/te", teRoutes);

const { kRoutes } = require("./k");
app.use("/k", kRoutes);

app.listen(port, () => {
  console.log(`Capstone Backend listening on port ${port}`);
});
