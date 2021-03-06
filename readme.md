## Inspiration
We wanted to create a bot that motivates people to study when they cannot be focused. We would waste our time setting up a studying environment. Such as trying to time ourselves how much we should study, what music should we listen during studying.

With this bot, it will clear out all the distraction and make us focus on studying by using this bot to setup your studying environment.


## What Study Helper Bot does
- Using ``!help``, it helps to find what command you will use.
- Using ``!music``, it finds studying music depending on genres (Lofi, Classical, Ambient...).


  ![image](https://user-images.githubusercontent.com/77949696/129763354-593a36d8-64ad-473b-832a-2c802d6b48a1.png)
  
-  Using ``!study clockin`` or ``!study clockout``, it times how long the user have studied by clocking in and out.
-  Using ``!study total``, it adds all the time user have studied and stores on database.


    ![image](https://user-images.githubusercontent.com/77949696/129763423-e1f963be-abb0-47f9-9e26-21317ff84881.png)


## What was used
- Javascript
- Discord.js
- MongoDB
- yt-search
- Heroku

## How we built it
We created the discord bot using **Javascript** and youtube **RESTful API** package from yt-search.

For backend, our bot utlizes library called **Discord.js** and database called **MongoDB** to store all the information about the user's study time.

For deployment, the bot is deployed on **heroku** for 24/7 hosting and maintained for studying discord server with an average of **5-20 users** per day.

<img width="946" alt="Heroku" src="https://user-images.githubusercontent.com/77949696/132406775-d7da127c-0fb2-4c4c-b826-f4390cce0902.PNG">

## How to use (not available)
If you want to test it out yourself, it can be run as a terminal bot.
- You need **config.json** to run this project. Ask me if you need it.
- Download the file and run it through your text editor (VS Code)
**When running the bot on your terminal, use this.**

```
node app.js
```
