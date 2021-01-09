import { Client, Message, MessageOptions } from "discord.js";
import secrets from "../secrets.json";

const client: Client = new Client();

client.on("ready", () => {
    console.log(`Logged in as ${client?.user?.tag}`);
})

client.on("message", (message: Message) => {
    if (message.content === "ping") {
        message.channel.send(<MessageOptions>{
            content: "pong"
        });
    }
    else {
        console.log("was not pinged");
    }
});

client.login(secrets.botToken);