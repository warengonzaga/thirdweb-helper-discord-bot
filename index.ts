import DiscordJS, { Channel, Intents, MessageEmbed } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const discordToken = process.env.DISCORD_TOKEN;

const bot = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

bot.on('messageCreate', (message) => {
    if (message.content === 'drop no-code') {
        message.reply({
            content: 'Alright, here: https://thirdweb.com/portal/guides/release-an-nft-drop-with-no-code',
        });
    }
});

// online status
bot.on('ready', async () => {
    
    // bot activity
    bot.user?.setActivity('Community', { type: 'WATCHING' });

    // bot logs
    console.log('# Thirdweb helper is now online!');
});

// error handling
bot.on('error', (error) => {
    console.log(error);
});

// authentication
bot.login(discordToken);
