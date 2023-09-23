const Discord = require('discord.js');
const { Client, MessageEmbed, Collection, MessageAttachment  } = require('discord.js');
const bot = new Discord.Client()
const client = new Client()
const fetch = require("node-fetch")
const https = require("https")

bot.on('ready', () => {
    console.info(`If this is gonna get leaked , lemme say it was maked by Ktho(OG Devill) , anyway i am logged in as -> ${bot.user.tag}!`);

});

bot.login("Your-Token")

bot.on('message', msg => {
    

    if(msg.content.startsWith("!find")){

        const args3 = msg.content.slice("!find".length).split(' ');

        var code = args3[1]
        var urlfivem = "https://servers-frontend.fivem.net/api/servers/single/"+code
        
        var headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.3",
        }
        
        https.get(urlfivem, function(res) {

            if(res.statusCode == 404){

                const mensaje = new Discord.MessageEmbed()
                .setColor("#DC143C")
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setDescription("```\n CFX INVALID , try again dumb!```")
                .setFooter("Owner: Ktho")
                msg.channel.send(mensaje);

            }else{

                fetch(urlfivem, { headers: headers })
                .then(res => res.json())
                .then((out) => {

                    if(!out["Data"]["connectEndPoints"][0].startsWith("http")) {

                        var split = `${out["Data"]["connectEndPoints"][0]}`.split(":")
                        var urlip = "http://ip-api.com/json/" + split[0]
                        fetch(urlip)
                            .then(res => res.json())
                            .then((out2) => {

                                if (out["icon"]) {
                                    var icon = out2["icon"]
                                    let file = new Buffer.from(icon, 'base64')
                                    const att = new Discord.MessageAttachment(file, "graph.png")
                                    const mensaje = new Discord.MessageEmbed()

                                        .setColor("#008000")
                                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                                        .addField("IP:Port", `\`${out["Data"]["connectEndPoints"][0]}\`\n\n/players.json: [Click here](http://${out["Data"]["connectEndPoints"][0]}/players.json)\n/info.json: [Click here](http://${out["Data"]["connectEndPoints"][0]}/info.json)\n/dynamic.json: [Click here](http://${out["Data"]["connectEndPoints"][0]}/dynamic.json)`)
                                        .addField("Server Details", `IP: \`${split[0]}\`\n Country: \`${out2["country"]}\`\n City: \`${out2["city"]}\`\n ISP: \`${out2["isp"]}\`\n Org: \`${out2["org"]}\`\n Zip Code: \`${out2["zip"]}\`\n Timezone: \`${out2["timezone"]}\`\n`)
                                        .addField("FiveM Server", `Server Name: \`${out["Data"]["hostname"].substring(0, 390)}\`\n\n Online Players: \`${out["Data"]["players"].length}\`\n Max Players: \`${out["Data"]["svMaxclients"]}\`\n Artifacts: \`${out["Data"]["server"]}\`\n Resources: \`${out["Data"]["resources"].length}\`\n Onesync Enabled?: \`${out["Data"]["vars"]["onesync_enabled"]}\`\n`, true)
                                        .setFooter("Owner: Ktho")
                                        .setThumbnail("attachment://graph.png")
                                        .attachFiles(att)

                                    msg.channel.send(mensaje);
                                } else {
                                    const mensaje = new Discord.MessageEmbed()
                                        .setColor("#008000")
                                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                                        .addField("IP:Port", `\`${out["Data"]["connectEndPoints"][0]}\`\n\n/players.json: [Click here](http://${out["Data"]["connectEndPoints"][0]}/players.json)\n/info.json: [Click here](http://${out["Data"]["connectEndPoints"][0]}/info.json)\n/dynamic.json: [Click here](http://${out["Data"]["connectEndPoints"][0]}/dynamic.json)`)
                                        .addField("Server Details", `IP: \`${split[0]}\`\n Country: \`${out2["country"]}\`\n City: \`${out2["city"]}\`\n ISP: \`${out2["isp"]}\`\n Org: \`${out2["org"]}\`\n Zip Code: \`${out2["zip"]}\`\n Timezone: \`${out2["timezone"]}\`\n`)
                                        .addField("FiveM Server", `Server Name: \`${out["Data"]["hostname"].substring(0, 390)}\`\n\n Online Players: \`${out["Data"]["players"].length}\`\n Max Players: \`${out["Data"]["svMaxclients"]}\`\n Artifacts: \`${out["Data"]["server"]}\`\n Resources: \`${out["Data"]["resources"].length}\`\n Onesync Enabled?: \`${out["Data"]["vars"]["onesync_enabled"]}\`\n`, true)
                                        .setFooter("Owner: Ktho")
                                    msg.channel.send(mensaje);
                                }


                            })

                    }else{
                        const mensaje = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setAuthor(msg.author.tag, msg.author.avatarURL())
                            .setDescription("```\n I am trying bro to get his info but i can't...```")
                            .addField("Cfx Url", `\`${out["Data"]["connectEndPoints"][0]}\``)
                            .addField("FiveM Server", `Server Name: \`${out["Data"]["hostname"].substring(0, 390)}\`\n\n Online Players: \`${out["Data"]["players"].length}\`\n Max Players: \`${out["Data"]["svMaxclients"]}\`\n Artifacts: \`${out["Data"]["server"]}\`\n Resources: \`${out["Data"]["resources"].length}\`\n Onesync Enabled?: \`${out["Data"]["vars"]["onesync_enabled"]}\`\n`, true)
                            .setFooter("Owner: Ktho")
                        msg.channel.send(mensaje);
                    }
                }).catch(() => {
                    const mensaje = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                        .setDescription("```\n CFX INVALID , try again dumb!```")
                        .setFooter("Owner: Ktho")
                    msg.channel.send(mensaje);

            })
        }

    })
        

    }else if(msg.content.startsWith("!ip")){
        const args3 = msg.content.slice("!ip".length).split(' ');

        var code = args3[1]
        var urlfivem = "https://servers-frontend.fivem.net/api/servers/single/"+code
        https.get(urlfivem, function(res) {
            if(res.statusCode == 404){
                const mensaje = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setDescription("```\n CFX INVALID , try again dumb!```")
                .setFooter("Owner: Ktho")
                msg.channel.send(mensaje);
            }else{
                fetch(urlfivem, { headers: headers })
                .then(res => res.json())
                .then((out) => {
                    const mensaje = new Discord.MessageEmbed()
                    .setAuthor(msg.author.tag, msg.author.avatarURL())
                    .setColor("#7CFC00")
                    .addField("IP:Port", `\`${out["Data"]["connectEndPoints"][0]}\``)
                    .setFooter("Owner: Ktho")
                    msg.channel.send(mensaje);
                }).catch(() => {
                    const mensaje = new Discord.MessageEmbed()
                        .setColor("#FF0000")
                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                        .setDescription("```\n CFX INVALID , try again dumb!```")
                        .setFooter("Owner: Ktho")
                    msg.channel.send(mensaje);

                })
            }
            
        })
        
    }else if(msg.content.startsWith("!help")){

        const mensaje = new Discord.MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.avatarURL())
        .setColor("#0000CD")
        .addField("\ ** Get Cfx Finder to your server ** ", "`!invite `")
        .addField("\ ** CFX Server Info ** ", "`!find [cfx code]`")
        .addField("\ ** Get Server IP ** ", "`!ip [cfx code]`")
        .addField("\ ** Get Server Logo ** ", "`!logo [cfx code]`")
        .addField("\ ** Get Server Tags ** ", "`!tags [cfx code]`")
        .addField("\ ** Get Server Resources **", "`!resources [cfx code]`")
        .setFooter("Owner: Ktho")
        msg.channel.send(mensaje);
    
    }else if(msg.content.startsWith("!logo")){

        const args3 = msg.content.slice("!logo".length).split(' ');

        var code = args3[1]
        var urlfivem = "https://servers-frontend.fivem.net/api/servers/single/"+code
        fetch(urlfivem, { headers: headers })
                .then(res => res.json())
                .then((out) => {
                    
                        if(!out["Data"]["connectEndPoints"][0].startsWith("http")){
                            var urlip = `http://${out["Data"]["connectEndPoints"][0]}/info.json`
                                                            
                                fetch(urlip)
                                .then(res => res.json())
                                .then((out2) => {
                                    
                                    var icon = out2["icon"]
                                    let file = new Buffer.from(icon, 'base64')
                                    const att = new Discord.MessageAttachment(file, "icon.png")
                                    const mensaje = new Discord.MessageEmbed()
        
                                    .setColor("#7CFC00")
                                    .setAuthor(msg.author.tag, msg.author.avatarURL())
                                    .setDescription("This is the Server Logo!")
                                    .setImage("attachment://icon.png")
                                    .attachFiles(att)
        
                                    msg.channel.send(mensaje);
                                })
                        }
                }).catch(() => {
            const mensaje = new Discord.MessageEmbed()
                .setColor("#FF4500")
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setDescription("```\n CFX INVALID , try again dumb!```")
                .setFooter("Owner: Ktho")
            msg.channel.send(mensaje);

        })
    }else if(msg.content.startsWith("!tags")){

        const args3 = msg.content.slice("!logo".length).split(' ');

        var code = args3[1]
        var urlfivem = "https://servers-frontend.fivem.net/api/servers/single/"+code
        fetch(urlfivem, { headers: headers })
                .then(res => res.json())
                .then((out) => {
                    if(out["Data"]["vars"]["tags"] && out["Data"]["hostname"]){

                        var tags = out["Data"]["vars"]["tags"]
                        var name = out["Data"]["hostname"]

                        const mensaje = new Discord.MessageEmbed()
                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                        .setColor("#7CFC00")
                        .addField("Server Name", `\`${name}\``.substring(0, 390))
                        .addField("Server Tags", `\`${tags}\``.substring(0, 1024))
                        .setFooter("Owner: Ktho")
                        msg.channel.send(mensaje);

                    }else{
                        const mensaje = new Discord.MessageEmbed()
                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                        .setColor("#FF4500")
                        .setDescription("```\n I am trying bro but i can't...```")
                        msg.channel.send(mensaje);
                    }
                    
                
                }).catch(() => {
            const mensaje = new Discord.MessageEmbed()
                .setColor("#FF4500")
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setDescription("```\n CFX INVALID , try again dumb!```")
                .setFooter("Owner: Ktho")
            msg.channel.send(mensaje);

        })

    }else if(msg.content.startsWith("!invite")){

        const mensaje = new Discord.MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.avatarURL())
        .setColor("#c73e10")
        .addField("\ ** Here is your invite link: **", "` https://discord.com/api/oauth2/authorize?client_id=1152200784809832489&permissions=8&scope=bot  `")
        .setFooter("Owner: Ktho")
        msg.channel.send(mensaje); 
    
    }else if(msg.content.startsWith("!resources")){

        const args3 = msg.content.slice("!resources".length).split(' ');

        var code = args3[1]
        var urlfivem = "https://servers-frontend.fivem.net/api/servers/single/"+code
        fetch(urlfivem, { headers: headers })
                .then(res => res.json())
                .then((out) => {
                    if(out["Data"]["resources"] && out["Data"]["hostname"]){

                        var resources = out["Data"]["resources"]
                        var name = out["Data"]["hostname"]

                        const mensaje = new Discord.MessageEmbed()
                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                        .setColor("#98FB98")
                        .addField("Server Name", `\`${name}\``.substring(0, 390))
                        .addField("Server Resources", `\`${resources}\``.substring(0, 1024))
                        .setFooter("Owner: Ktho")
                        msg.channel.send(mensaje);

                    }else{
                        const mensaje = new Discord.MessageEmbed()
                        .setAuthor(msg.author.tag, msg.author.avatarURL())
                        .setColor("#FF4500")
                        .setDescription("```\n I am trying bro but i can't...```")
                        msg.channel.send(mensaje);
                    }
                

                }).catch(() => {
            const mensaje = new Discord.MessageEmbed()
                .setColor("#FF4500")
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setDescription("```\n CFX INVALID , try again dumb!```")
                .setFooter("Owner: Ktho")
            msg.channel.send(mensaje);

        })

    }else if(msg.content.startsWith("!owner")){
        const args3 = msg.content.slice("!owner".length).split(' ');
        var code = args3[1]
        var urlfivem = "https://servers-frontend.fivem.net/api/servers/single/"+code
        fetch(urlfivem, { headers: headers })
        .then(res => res.json())
        .then((out) => {
            if(out["Data"]["ownerName"]){
                const mensaje = new Discord.MessageEmbed()
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setColor("#4169E1")
                .addField("Owner Name", `\`${out["Data"]["ownerName"]}\``)
                .setFooter("Owner: Ktho")
                 msg.channel.send(mensaje);
            }
        }).catch(() => {
            const mensaje = new Discord.MessageEmbed()
                .setColor("#FF4500")
                .setAuthor(msg.author.tag, msg.author.avatarURL())
                .setDescription("```\n CFX INVALID , try again dumb!```")
                .setFooter("Owner: Ktho")
            msg.channel.send(mensaje);

        })
    }

})