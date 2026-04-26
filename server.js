const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: process.env.PORT || 3000 });

wss.on("connection", (ws) => {
  console.log("client connected");

  ws.on("message", (msg) => {
    console.log("Gelen:", msg.toString());

    // 🔥 HERKESE GÖNDER (ESP32 dahil)
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(msg.toString());
      }
    });
  });

  ws.send("server_ready");
});