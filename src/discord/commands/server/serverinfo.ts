import { Command } from "@/discord/base";
import { ApplicationCommandType } from "discord.js";

new Command({
    name: "serverinfo",
    description: "Informações do Servidor",
    dmPermission,
    type: ApplicationCommandType.ChatInput,
    async run(interaction){
        const { guild } = interaction;
    }
});