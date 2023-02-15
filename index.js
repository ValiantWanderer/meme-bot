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

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.cache.get(`1072268800398991450`).send(`Woohoo!`)

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
            client.channels.cache.get(`1072268800398991450`).send(`Oh wait I can't die...`)
        })
    }
});

async function getMeme(){
    const res = await axios.get('https://meme-api.com/gimme');
    return res.data.url;
}

client.login(token);


