var Browser = require("zombie");

browser = new Browser()
Browser.userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.104 Safari/537.36";

browser.visit("https://app.halowaypoint.com/oauth/spartanToken", function() {
  browser.
    fill('input[name="email"]', "xx@live.com").
    fill('input[name="passwd"]', "xx").
    pressButton("Sign in", function() {
      console.log(browser.text("body"));
      browser.close();
    })
});
