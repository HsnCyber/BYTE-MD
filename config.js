
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vad0Zm7ISTkBsxrAQz3t";
global.website = process.env.GURL || "
  https://whatsapp.com/channel/0029Vad0Zm7ISTkBsxrAQz3t";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923183830766";
global.owner = process.env.OWNER_NUMBER || "923123916540";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NRY1V6RmYydUUweUJIVVJscjBCaFhiVG1OdEpxbTlyVFdsV0RNbjdHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWlXMkpzZlV0M1V1anlZTVlKQ0o1cFk4YURzcWxSclJnUUVoTmtaMU9sVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QjVVUDU1U0xPN3F1ZlFITzh0bnpGOGJpYkxpQ2VGZlVoRjhzSUtTdG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKb1NTSnJ1V0JFYUlhVGZFL01LYUp4dVVmcmZqN2NqUXJrQXB3UmdZMkQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KQlpuZTZMU084TGsra3Rocm5MVjBHQW5oTnovQlRMSzY4YU9KckdTbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhYRGFQaGRQdXBzLzB5V3crWXhsV3BGa1NQMXFCdEE4cTdoMGE5YU9oVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExFTE9TZ1NPeHBqREpNVHVUNldNZi9hSXc4THFlN2VqSnV2OGh1TUoyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHlrMEVSWkhLZGJ5YU1RQzVxMUYvSlhZWVowbTNaMkVwVGFDZkcrakZtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNCRW1oTnR5SWNIS2NOQXpLajd6UlRsUTErazV3WFBaaWxVRUZaamM5dHIwaDdHaUVqTm9HVURORTkyMUlOQ2QyeVJBNXY2NXpydllOQUR6TzBIMENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJJdGpKeWlYaitWRU1wL2Z2eFJ0dGw1MjMvbGxKbzdJSXlVSDJwODl2WDJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItc2c5d3BmQlRTU3VKTF94QW1EODlnIiwicGhvbmVJZCI6ImU2NGI0MWIzLTMzYjEtNGQ2ZC04MWQxLTlmMjVhNzY2NTc3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvbE44YUxMb0QxMkVyTlRTRVZzRmhZK2g2Qjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0M0TXFWUTVxWEtKT3NVaDVxcGsxbmV2S0tnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpHV0RIVkpRIiwibWUiOnsiaWQiOiI5MjMxMjM5MTY1NDA6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RsvCdkorwnZGz8J2Rs/CdkobwnZG58J2Sk/CdkpPwnZKT8J2SkyDwnZKJ8J2SlvCdko8g8J2SgPCdkoLwnZKC8J2SgvCdkpjwnZKY8J2SmPCdkpPwnZKT8J2Sk/CdkpMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s3TzNlSUhFT3YwbjdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI3TmkrS2ltOG1hTEFDQlZrOVVuYlpLWUE2ZTkzUzNWd3hNRDhYTWJWams9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlrTVZXeW9KVWhFZnoyeUVKRVVGTnlSb3BsU0xvMFJOb0FSRDBmZUxiYWFjR21YRksvUUVtbzJMMWRVNk8vdVAwZy9rWmwxWU1nQ2Nhb2FQU0k3OUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlY3lSTXVCQWE2aW5ueDhOcStGS2luM0NIeGpQazB2Z2lBZXpWNS9oVkkrMi9iZEFBV3ZZUTJlQ0NUakhYNDhramFkWSt3TEhOMWtCQklkbC95OVdDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEyMzkxNjU0MDoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXK3pZdmlvcHZKbWl3QWdWWlBWSjIyU21BT252ZDB0MWNNVEEvRnpHMVk1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTg3NTAyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By the killer*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "THE-KILLER",
  ownername: process.env.OWNER_NAME || "THE KILLER",
  errorChat: process.env.ERROR_CHAT || "923183830766",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
