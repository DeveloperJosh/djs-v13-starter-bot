const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with the help cmd!'),
	async execute(interaction) {
        const embed = new discord.MessageEmbed()
        .setTitle("Help Cmd")
        .setDescription("/ping\n/pong\n/chat")
		.setColor('GREEN')
		return interaction.reply({embeds: [embed] });
	},
};