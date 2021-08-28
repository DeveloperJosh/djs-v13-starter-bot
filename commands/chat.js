const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require('discord.js');
const fetch = require("node-fetch")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
		.setDescription('Replies with the help cmd!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input text')
                .setRequired(true)),
	async execute(interaction) {
        const value = interaction.options.getString('input')
        const chatbot = await fetch(`https://api.monkedev.com/fun/chat?msg=${value}`)
        const body = await chatbot.json()
        const embed = new discord.MessageEmbed()
        .setTitle("Chat Bot")
        .setDescription(`Your message: ${value}\nBots reply: ${body.response}`)
		.setColor('GREEN')
		return interaction.reply({embeds: [embed] });
	},
};