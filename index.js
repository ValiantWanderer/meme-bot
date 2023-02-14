require('dotenv').config();
const axios = require('axios');
const { Client, GatewayIntentBits, ApplicationCommandPermissionType } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`)
});


client.on('messageCreate', async (message) => {
    if (message.content == "!meme") {
        const img = await getMeme();
        message.channel.send(img);
    }
});

async function getMeme(){
    const res = await axios.get('https://meme-api.com/gimme');
    return res.data.url;
}

client.login(process.env.CLIENT_TOKEN);