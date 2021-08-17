const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "help",
  execute(message) {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Study bot helps!")
      .setDescription("All study bot commands")
      .setThumbnail(
        "https://d1x26sjkwh9vok.cloudfront.net/uploads/profile/20210318/6d4b2890-31a2-4ce1-b600-7f17a7ed555d.png"
      )
      .addFields(
        { name: "!help", value: "Shows all commands you can use!" },
        { name: "!ping", value: "returns pong!" },
        { name: "!server", value: "Shows the server status" },
        {
          name: "!study",
          value: "Study motivation by timing how much you have studied!",
        },
        {
          name: "!music",
          value: "Finds study music based on users selected genre.",
        }
      );

    message.channel.send({ embeds: [exampleEmbed] });
  },
};
