var tmi = require('tmi.js');
var key = require('./keys.js')

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: 'aws',
		reconnect: true
	},
	identity: {
		username: 'gandleforkbot',
		password: key

	},
	channels: ['Gandlefork']
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
	// console.log('Address: ' + address + ' Port: ' + port);
	client.action('Gandlefork', 'Gandleforkbot has entered the channel! Type !help at any time for a list of commands.')
});

client.on("chat", function (channel, user, message, self) {

	if ( message === '!help') {
		client.action('Gandlefork', 'Current commands: !twitter !time')
	}

	if ( message === '!twitter') {
		client.action('Gandlefork', 'twitter.com/kjg310')
	}

	if ( message === '!time') {
		var time = new Date();
		client.action('Gandlefork', time)
	}

});