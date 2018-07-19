const path = require('path');
const DiscordRPC = require('discord-rpc');
const custom = require("./functions.js");
const ClientId = "419312270846197770";
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();
const status={
	details: "Just messing around~",
	state: "N-Nothing..",
	largeKey: "arno_and_celio",
	largeText: "Arno and Celio <3",
	smallKey: "furry_paw",
	smallText: "FURRY PRIDE!!!"
};

DiscordRPC.register(ClientId);

function setActivity() {
	rpc.setActivity({
    details: status.details,
	state: status.state,
    startTimestamp,
    largeImageKey: status.largeKey,
    largeImageText: status.largeText,
    smallImageKey: status.smallKey,
    smallImageText: status.smallText,
    instance: false,
  });
  console.log(`[${custom.getCurrentTimestamp().split("T")[1].replace("Z","")}] Set Presence`);
}
rpc.on('ready', () => {
	setActivity();
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login(ClientId).catch(console.error);
