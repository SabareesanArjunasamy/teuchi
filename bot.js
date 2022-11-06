const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    if (interaction.commandName === 'naruto') {
        await interaction.reply('Ramen...');
    }
});

client.login('MTAzODQyMTM1ODIyNjQ1NjU5Ng.GHP0ww.wToBN9VaWXBCAhkmykcvRUfOOgAwAIpl5GWLmQ');