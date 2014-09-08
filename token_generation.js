var casper = require('casper').create({
    timeout: 5000
});
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4');

casper.start('https://app.halowaypoint.com/oauth/spartanToken', function() {
    //console.log("Loading up sign in form...");
});

casper.then(function() {
    //console.log("Inserting login information...");

    this.evaluate(function(username, password) {

        document.querySelector('#i0116').value = username;
        document.querySelector('#i0118').value = password;
        document.querySelector('#idSIButton9').click();
    }, 'xx@live.com', 'xx');
});

casper.then(function() {
    //console.log("Grabbing SpartanToken...");
    console.log(this.getPageContent());
});

casper.run();
