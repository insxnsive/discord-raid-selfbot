//--Código, ignorar, não mexa.--

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const axios = require('axios');
require ('colors')

client.once('ready', function(){
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                                                                               "             );
    console.log ("                                                [Nate's RaidBot Online]".brightCyan                                          );
    console.log ("                                                Este Token está:".brightWhite,"Online".brightGreen                           );
    console.log ("                                                 Bot Ativo em:".brightCyan, client.user.tag.brightWhite                      );
    console.log ("                                                                                                                            ");
    console.log ("                                             All Rights Reserved © Nate 2021".brightWhite                                    );
    console.log ("                                                  Bring it on, bitch.".red                                                   );
    console.log ("                                                                                                                            "); 
    console.log ("                                                                                                                            "); 
    console.log ("                                                                                                                            "); 
});

//--Início do Código.--

client.on("message", message => {

//--ID Do Host da Raid abaixo  vvvvvvvvvvvvvvvvvvv Troque para o ID da conta que pode iniciar a Raid!--

if (message.author.id !== "ID DO HOST DA RAID") return

//--Código, ignorar, não mexa.--

if (!message.content.startsWith(config.prefix) || message.author.bot) return;
if (message.content[0] !== config.prefix) return;
const args = message.content.slice(config.prefix.length) .split(/ +/);
const command = args.shift().toLowerCase();

//--Comando de Raid!--

if (command === "raid") { 
var interval = setInterval (function () {
var list = [
`
Mensagem 1
`,
//-------------------        
`
Mensagem 2
`,
//-------------------
`
Mensagem 3
`,
//-------------------
`
Mensagem 4
`,
//-------------------
`
Mensagem 5
`,
//-------------------
`
Mensagem 6      
`
];

//--Código, ignorar, não mexa.--

var rand = list[Math.floor(Math.random() * list.length)];
message.channel.send(rand)
.catch(console.error);

//--Lista de coisas que o Console diz.--

    var list2 = [
        "[Raid Online] Será que eles tão gostando? 1 Flood foi enviado! =)".brightCyan,
        "[Raid Online] Será que eles tão gostando? 1 Flood foi enviado! =)".brightGreen,
        "[Raid Online] Será que eles tão gostando? 1 Flood foi enviado! =)".brightWhite,
        "[Raid Online] A Raid tá indo bem! (eu acho?) 1 Flood foi enviado! =)".red,
        "[Raid Online] A Raid tá indo bem! (eu acho?) 1 Flood foi enviado! =)".brightYellow,
        "[Raid Online] A Raid tá indo bem! (eu acho?) 1 Flood foi enviado! =)".brightMagenta,
        "[Raid Online] Aproveita pra seguir o Nate no GitHub! 1 Flood foi enviado! =)".rainbow,
        "[Raid Online] Tá difícil do AntiRaid-bot Free deles tankar? :thonk: 1 Flood foi enviado! =)".brightCyan,
        "[Raid Online] Tá difícil do AntiRaid-bot Free deles tankar? :thonk: 1 Flood foi enviado! =)".brightGreen,
        "[Raid Online] Tá difícil do AntiRaid-bot Free deles tankar? :thonk: 1 Flood foi enviado! =)".brightWhite,
        "[Raid Online] Quem é Rony perto de mim? 1 Flood foi enviado! =)".bold.red,
        "[Raid Online] Quem é Rony perto de mim? 1 Flood foi enviado! =)".brightYellow,
        "[Raid Online] Quem é Rony perto de mim? 1 Flood foi enviado! =)".brightMagenta,
        "[Raid Online] Aiai, tá divertido xD 1 Flood foi enviado! =)".brightWhite,
        "[Raid Online] Aiai, tá divertido xD 1 Flood foi enviado! =)".brightYellow,
        "[Raid Online] Aiai, tá divertido xD 1 Flood foi enviado! =)".brightMagenta,
    ];
                var rand2 = list2[Math.floor(Math.random() * list.length)];
            console.log(rand2)
        }, 1 * 1000); 

//--Comando de Stop, não mexa!--

} else if (command === "stop") {
    console.clear();
        client.destroy();
    }
})

client.login(config.token);

//--Fim do código--
