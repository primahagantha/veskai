const express = require("express");
const app = express();
const port = 3000;
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [Object.keys(Discord.GatewayIntentBits)],
    partials: [Object.keys(Discord.Partials)]
});
const CHANNEL_ID = "355636402458984449";

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));


// Parse JSON request bodies
app.use(express.json());

// Handler for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// Handle message sending
app.post("/send-message", (req, res) => {
  const message = req.body.message;
  const channel = client.channels.cache.get(CHANNEL_ID);

  if (!channel) {
    return res.status(500).json({ error: "Channel not found" });
  }

  channel
    .send(message)
    .then(() => res.json({ success: true }))
    .catch((error) => res.status(500).json({ error: error.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Discord.js client ready event
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Discord.js login using your bot token
client.login(
  "rahasia negara"
);
