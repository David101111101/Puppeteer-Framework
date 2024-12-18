const { launch, BrowserContext } = require("puppeteer");

module.exports = {
    launch: {
        headless: false,
        slowMo: 100,
       // args: ["--window-size=1920,1080"],
       defaultViewport: null,
        },
        browserContext: 'default'
    
}