const path = require('path');
const url = require('url');
const DiscordRPC = require('discord-rpc');

const ClientId = '419312270846197770';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

rpc.on('ready', () => {
	rpc.setActivity({
    details: "Just messing around~",
    state: 'N-Nothing..',
    startTimestamp,
    largeImageKey: 'arno_and_celio',
    largeImageText: 'Arno and Celio <3',
    smallImageKey: 'furry_paw',
    smallImageText: 'FURRY PRIDE!!',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);