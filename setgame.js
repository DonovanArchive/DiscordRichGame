const path = require('path');
const url = require('url');
const DiscordRPC = require('discord-rpc');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const custom = require("./functions.js");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.furrybot.me/dev/devstatus.php", false);
xhr.setRequestHeader("Authorization", "Password NOPE");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
const ClientId = JSON.parse(xhr.responseText).main.clientid;
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

DiscordRPC.register(ClientId);

function setActivity() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://www.furrybot.me/dev/devstatus.php", false);
	xhr.setRequestHeader("Authorization", "Password NOPE");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();
	var info=JSON.parse(xhr.responseText);
	rpc.setActivity({
    details: info.richstatus.text.details,
	state: info.richstatus.text.state,
    startTimestamp,
    largeImageKey: info.richstatus.image.large_image,
    largeImageText: info.richstatus.text.large_image_text,
    smallImageKey: info.richstatus.image.small_image,
    smallImageText: info.richstatus.text.small_image_text,
    instance: false,
  });
  console.log(`[${custom.getCurrentTimestamp().split("T")[1].replace("Z","")}] Updated rich presence;${"\n"}Details: ${info.richstatus.text.details}${"\n"}State: ${info.richstatus.text.state}${"\n"}Large Image: ${info.richstatus.image.large_image}${"\n"}Large Image Text: ${info.richstatus.text.large_image_text}${"\n"}Small Image: ${info.richstatus.image.small_image}${"\n"}Small Image Text: ${info.richstatus.text.small_image_text}${"\n"}${"\n"}`);
}
rpc.on('ready', () => {
	setActivity();
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login(ClientId).catch(console.error);