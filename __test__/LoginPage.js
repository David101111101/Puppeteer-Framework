import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page); // Pass the page instance to the BasePage constructor
        this.navBar = "#app > div > header > div > div:nth-child(2) > ul > div > button > span:nth-child(1)";
        this.inputEmail = '//*[@id="login"]/div[1]/input';
        this.inputPassword = '//*[@id="login"]/div[2]/input';
        this.submitButtonLogin = '//*[@id="app"]/div/section[3]/div/div[2]/div/nav/button[2]';    
        this.logInPageTest = '//*[@id="app"]/div/header/div/div[2]/ul/div/button/span[1][contains(text(),"Hello")]';
    }

    async visit() {
        await page.goto('https://demo.testim.io/login');
        const url1 = await this.getUrl();
        console.log(url1);
    }

    async logIn(email, password) {
        await page.waitForXPath(this.inputEmail);
        const emailInput = await page.$x(this.inputEmail);
        await emailInput[0].type(email);
        
        await page.waitForXPath(this.inputPassword);
        const passwordInput = await page.$x(this.inputPassword);
        await passwordInput[0].type(password);
        
        await page.waitForXPath(this.submitButtonLogin);
        const loginButton = await page.$x(this.submitButtonLogin);
        await loginButton[0].click();
    }

    async validateLogin() {
        await page.waitForSelector(this.logInPageTest);
        await page.waitForSelector(this.navBar);
    }


}
