const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
    if (!browser) {
        browser = await puppeteer.launch({
            headless: false,
        defaultViewport: { width: 1280, height: 800 }
        });
    }
    page = await browser.newPage();
});

afterAll(async () => {
    await browser.close();
});

describe('Google', () => {
    it('abrir el navegador', async () => {
        await page.goto('https://www.google.com/');
    }, 15000);
});
