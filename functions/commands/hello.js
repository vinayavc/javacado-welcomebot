const lib = require('lib')({token: process.env.STDLIB_TOKEN});
// var express = require('express');
// var router = express.Router();
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/

let quotes = function() {
	var req = new XMLHttpRequest();
    //req.setHeader("Access-Control-Allow-Origin", "*");
    req.open('GET','https://api.kanye.rest/');
    var json1 = req.responseText;
    var json = JSON.parse(json1);
    
    return json["quote"];

}

module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    text: `Hello, <@${user}>...\nYou said: ${text}`,
    attachments: [ {
	      // You can customize your messages with attachments.
	      // See https://api.slack.com/docs/message-attachments for more info.
	      "text": quotes,
	      "footer": "Slack API"
	  }
    ]
  });
};
