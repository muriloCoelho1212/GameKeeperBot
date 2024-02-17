import { Command } from "@/discord/base";
import { settings } from "@/settings";
import { hexToRgb } from "@magicyan/discord";
import { ApplicationCommandType, EmbedBuilder, time } from "discord.js";

new Command({
    name: "userinfo",
    description: "Suas informações de usuário!",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    async run(interaction){
      const { user, member } = interaction;

      const embed = new EmbedBuilder({
        author: {
          name: "Informações do Usuário",
        },
        title: user.globalName ?? "n/a",
        thumbnail: {
          url: user.avatarURL() ?? "n/a"
        },
        color: hexToRgb(settings.colors.theme.info),
        fields: [
          {
            name: "Id",
            value: user.id,
            inline
          },
          {
            name: "Tag",
            value: user.username,
            inline
          },
          {
            name: "Entrou em:",
            value: `${time(member.joinedAt ?? new Date(), "D")}`
          },
          {
            name: "Perfil criado em:",
            value: `${time(user.createdAt, "D")}, às ${time(user.createdAt, "T")} (${time(user.createdAt, "R")})`
          }
        ]
      });

      interaction.reply({ ephemeral, embeds: [embed] });
    }
});