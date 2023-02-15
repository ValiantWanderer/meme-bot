# Memebot

A Discord bot written in Node.JS that pulls fresh 🌶️ memes on command.

Optional dockerfile if you wish to run and deploy on docker. Alternatively can be run just with NPM/Node.

## Prerequisites / Installation

You will need a Discord Developer account and have set up a new application and bot token.

Discord developer portal to setup the application and token can be accessed [here](https://discord.com/developers/applications).

The bot requires the MESSAGE CONTENT INTENT enabled in order to read the commands.

If you want to run this outside of Docker, you will need to have at least NodeJS version 16 installed.

### Node(v16+):

Create a .env file to contain your bot token in the root dir.

```bash
.env
CLIENT_TOKEN=yourtoken
```
Run:

```bash
node index.js
```

### Docker:
Either build with the dockerfile or pull the latest version of the built image from Dockerhub.

```bash
docker run -d -e CLIENT_TOKEN=yourtoken cx00/meme
```

## Usage

Invite the bot to your server then use the following commands

```bash
!meme #Pull random meme
```