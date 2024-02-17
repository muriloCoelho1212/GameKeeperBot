import { Command } from "@/discord/base";
import { settings } from "@/settings";
import { hexToRgb } from "@magicyan/discord";
import { ApplicationCommandType, EmbedBuilder, time } from "discord.js";

new Command({
    name: "serverinfo",
    description: "Informações do Servidor",
    dmPermission,
    type: ApplicationCommandType.ChatInput,
    async run(interaction){
        const { guild, user, member } = interaction;

        const embed = new EmbedBuilder({
          author: {
            name: "Informações do Servidor",
          },
          title: guild.name,
          thumbnail: {
            url: guild.iconURL() ?? "n/a"
          },
          color: hexToRgb(settings.colors.theme.info),
          fields: [
            {
              name: "Id",
              value: guild.id,
            },
            {
              name: "Usuários no Servidor:",
              value: guild.memberCount.toString(),
              inline
            },
            {
              name: "Servidor criado em:",
              value: `${time(guild.createdAt, "D")}`,
              inline
            },
          ]
        });
        interaction.reply({ embeds: [embed] });
    }
});