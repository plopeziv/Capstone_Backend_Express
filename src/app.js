const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3040;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://pedrolopeziv.vercel.app"],
  })
);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Capstone API",
      version: "1.0.0",
      description: `Football documentation for Pedro Lopez's capstone project`,
    },
    servers: [
      {
        url: process.env.BASE_URL,
      },
    ],
  },
  apis: ["./src/*/*Routes.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
if (process.env.VERCEL !== "1") {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
} else {
  app.get(
    "/swagger.json",
    cors({
      origin: ["http://localhost:3000", "https://pedrolopeziv.vercel.app"],
    }),
    (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    }
  );
}

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
  process.env.VERCEL !== "1" &&
    console.log(`Swagger docs available at ${process.env.BASE_URL}/api-docs`);
});
