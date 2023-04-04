require('dotenv').config();
const axios = require('axios');
const { Client, GatewayIntentBits, ApplicationCommandPermissionType } = require('discord.js');
const token = process.env.CLIENT_TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const channelName = "general-chatz";

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.channels.cache.get(`1072268800398991450`).send(`Woohoo hello!`)
    client.channels.cache.find(channel => channel.name === channelName).send(`Yea boi`)

});


client.on('messageCreate', async (message) => {
    if (message.content == "!meme") {
        const img = await getMeme();
        message.channel.send(img);
    }
    if (message.content == "die") {
        message.channel.send("Bye!").then( m => {
            client.destroy()
        })     
        .then( () => {
            client.login(token);
        })
    }

});

async function getMeme(){
    const res = await axios.get('https://meme-api.com/gimme');
    return res.data.url;
}

client.login(token);


