const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on("connection", (ws) => {
  console.log("Client bağlandı");

  ws.on("message", (msg) => {
    console.log(msg.toString());
  });

  ws.send("server_ready");
});