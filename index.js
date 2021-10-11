//--Código, ignorar, não mexa.--
//--Code, ignore, don't change anythig.--

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
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
//--Start of the Code.--

//--Código, ignorar, não mexa.--
//--Code, ignore, don't change anythig.--

client.on("message", message => {

if (message.author.id !== config.id) return

if (!message.content.startsWith(config.prefix) || message.author.bot) return;
if (message.content[0] !== config.prefix) return;
const args = message.content.slice(config.prefix.length) .split(/ +/);
const command = args.shift().toLowerCase();

//--Comando de Raid!--
//--Raid command!--

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
//--Code, ignore, don't change anythig.--

var rand = list[Math.floor(Math.random() * list.length)];
message.channel.send(rand)
.catch(console.error);

//--Lista de coisas que o Console diz.--
//--All things console says during the raid.--

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
//--Stop command, do not touch!--

} else if (command === "stop") {
    console.clear();
        client.destroy();
    }
})

client.login(config.token);

//--Fim do código--
//--End of the code--
