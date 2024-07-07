const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_29_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1bnhtSHh2TjlTdDdYNVI4dlMwSENuSm9qVi9qV1BqTkJLeEZkYzZkNFpVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYU2pTYnlySFFzQzQ3Mkc3d3hadThnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhMjZlNzQ4LWRhOGItNDUxZi1hYWI3LWUyZDM0NThkZjBlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxMzksXG4gICAgICAxOTQsXG4gICAgICAyMixcbiAgICAgIDE2OCxcbiAgICAgIDI5LFxuICAgICAgNzgsXG4gICAgICAxNjgsXG4gICAgICA0MSxcbiAgICAgIDE1MCxcbiAgICAgIDc1LFxuICAgICAgNjEsXG4gICAgICAyMTgsXG4gICAgICA5MCxcbiAgICAgIDcxLFxuICAgICAgOTEsXG4gICAgICAxNTEsXG4gICAgICAxMzksXG4gICAgICAxMjIsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNDIsXG4gICAgICAxMjMsXG4gICAgICAxODIsXG4gICAgICAxOTksXG4gICAgICA1LFxuICAgICAgMTM1LFxuICAgICAgODgsXG4gICAgICAxMjQsXG4gICAgICAxNjcsXG4gICAgICAyMTksXG4gICAgICAxNyxcbiAgICAgIDE1MyxcbiAgICAgIDc5LFxuICAgICAgMTQzLFxuICAgICAgMTIxLFxuICAgICAgODUsXG4gICAgICAxMDIsXG4gICAgICA2MSxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4UzJDM01RM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQzMDAxMjU5OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODY5NTYwMTczMDc3NzQ6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJDM3FZR0VLRDRxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlTFJNc0RadUdOT1BKWDdFejVzcFlLeWlpSVBLNHlaNDdRUHVUbG04VFUwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlE3KzVNVldMWWhWWkpjU3BHN2ZRYkFRZHN4VFQxSWgrWFFaald0eTNYdU92OWhoRWh1UW4rK0Y3T01uYWVTeUpYVTduMzFKL2xDcERRQUExNmJvZUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlIL1M4MGVpWGZyQXdXZVgyOWpDKyt4ckJ3NGxwT08rSGQwN2lwSkp3c1JNUHZTMnJXU3FqbFl2N2lYQWJnSElucnVtLzExaUJtNGJ4R3dTVkNuZkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU0MzAwMTI1OToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzUxNzc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
