const Discord = require("discord.js");

module.exports = {
  name: "music",
  description: "Finds shuffled music on youtube and links it!",

  execute(message, words) {
    let genres = "";
    if (words[0] === undefined) {
      const helpEmbed = new Discord.MessageEmbed()
        .setColor("#c542f5")
        .setTitle("!music help")
        .addFields(
          {
            name: "`!music help`",
            value: "display all commands in the `music` family.",
          },
          {
            name: "`!music ambiance`",
            value: "Finds ambiance video to study.",
          },
          {
            name: "`!music classic`",
            value: "Finds classical music to study.",
          },
          {
            name: "`!music lofi`",
            value: "Finds lofi music to study.",
          }
        );

      message.channel.send({ embeds: [helpEmbed] });
    } else {
      switch (words[0].toUpperCase()) {
        case "HELP":
          const helpEmbed = new Discord.MessageEmbed()
            .setColor("#c542f5")
            .setTitle("!music help")
            .addFields(
              {
                name: "`!music help`",
                value: "display all commands in the `music` family.",
              },
              {
                name: "`!music ambiance`",
                value: "Finds ambiance video to study.",
              },
              {
                name: "`!music classic`",
                value: "Finds classical music to study.",
              },
              {
                name: "`!music lofi`",
                value: "Finds lofi music to study.",
              }
            );

          message.channel.send({ embeds: [helpEmbed] });
          break;
        case "AMBIANCE": //!music ambiance
          genres = "Ambiance";
          musicFinder(message, genres);
          break;
        case "CLASSIC": //!music classic
          genres = "Classic";
          musicFinder(message, genres);
          break;
        case "LOFI": //!music lofi
          genres = "Lofi";
          musicFinder(message, genres);
          break;
        default:
          //message.channel.send('Unexpected arguments. Try using `!music help` for more information.');
          const unexpectedArgumentsEmbed = new Discord.MessageEmbed()
            .setColor("#ff3300")
            .setTitle("Unexpected arguments")
            .setDescription("Try using `!music help` for more information.");
          message.channel.send({ embeds: [unexpectedArgumentsEmbed] });
          break;
      }
    }
  },
};

async function musicFinder(message, genre) {
  //Searching YT npm
  const yts = require("yt-search");
  const r = await yts(`study music ${genre}`);
  var resultVid = "";

  //Random number generator
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let gotRandom = getRandomInt(11);
  console.log(gotRandom);
  // Gets random vid from this search.
  const videos = r.videos.slice(gotRandom, gotRandom + 3);
  videos.forEach(function (v) {
    const views = String(v.views).padStart(10, " ");
    console.log(`${views} | ${v.title} (${v.timestamp}) | ${v.author.name}`);
    resultVid += `${v.title} [${v.timestamp}] | by ${v.author.name} \n 🖱️ ${views} views \n 🔗 ${v.url} \n\n`;
  });

  //Prints out the music
  const musicEmbed = new Discord.MessageEmbed()
    .setColor("#c542f5")
    .setTitle(`${genre} musics!`)
    .setDescription(resultVid);

  message.channel.send({ embeds: [musicEmbed] });
}
