const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Wasi_Tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function WASI_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Wasi_Tech = Wasi_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Wasi_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Wasi_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Wasi_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Wasi_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Wasi_Tech.sendMessage(Pair_Code_By_Wasi_Tech.user.id, { text: '' + b64data });

               let WASI_MD_TEXT = `
*_Pair Code Connected by BELTAH TECH_*
*_Made on earth by Beltah tech team_*
______________________________________
╔════◇
║ *『THANKS FOR CHOOSING BELTAH TECH BOT』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *CONTACT:* _HTTPS://WA.ME/254737681758_
║❒ *DEVELOPER:* _https://wa.me/message/254114141192_
║❒ *Repo:* _https://github.com/Beltahmd_
║❒ *WaGroup:* _https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F_
║❒ *Plugins:* _https://github.com/Beltahmd_
╚════════════════════════╝
_____________________________________

_★𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 © 𝙱𝚎𝚕𝚝𝚊𝚑-𝚃𝚎𝚌𝚑-𝚃𝚎𝚊𝚖_`
 await Pair_Code_By_Wasi_Tech.sendMessage(Pair_Code_By_Wasi_Tech.user.id,{text:WASI_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Wasi_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    VENOCYBER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await WASI_MD_PAIR_CODE()
});
module.exports = router
