const ngrok = require('ngrok');
const terminalLink = require('terminal-link');
(async function() {
    const url = await ngrok.connect(3000);
	try {
		const link = terminalLink('Website URL', url);
		console.log("\nYour ngrok URL for testing is:");
		console.log(link);
		console.log();
	} catch(err){
		console.log("\nYour ngrok URL for testing is:");
		console.log(url);
		console.log();
	}
})();