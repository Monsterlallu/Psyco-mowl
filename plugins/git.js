const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/PicsArt_09-28-08.19.44.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater MONSTER*
*owner number wa.me/917736129238*

*Bot making video : https://youtu.be/fd0KPblop-k*

*Yt_PASSWORD: _________(password on this video watch it full)*

*githublink : https://github.com/cyberchhttps://github.com/Monsterlallu/Psyco-mowl.git*

*audio commads : https://github.com/Monsterlallu/Psyco-mowl/tree/master/uploads*
`}) 

}));
