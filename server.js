const express = require("express");
const ScoketServer = require("ws").Server;

const PORT = 3001;
const server = express().listen(PORT, () =>
  console.log(`Server Listening on ${PORT}`)
);

const wss = new ScoketServer({ server });
wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (data) => {
    console.log("message", data);
  });
  ws.on("close", () => {
    console.log("close connected");
  });
});
