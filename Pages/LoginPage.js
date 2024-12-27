import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    constructor() {
        
        super(); // Pass the page instance to the BasePage constructor, its necesary when heredando clases de otros archivos
        this.inputEmail = "#email"
        this.inputPassword = "#password"
        this.submitButtonLogin = "#submitBTN"
        this.logInPageTest = "#fadein > main > div > div > div > div.pt-3 > div > div > div > div.w-100.text-center.mt-3 > span";
        this.navBar = "#navbarSupportedContent"
    }

    async visit() {
        await page.goto('https://phptravels.net/login');              
        const url1 = await this.getUrl();
    }

    async logIn(email, password) {      
      
        await page.waitForSelector(this.inputEmail);       
        await this.type(this.inputEmail, String(email)); // Ensure email is a string
        await this.type(this.inputPassword, String(password)); // Ensure password is a string
        await this.click(this.submitButtonLogin);
        
    }

    async validateLogin() {
        await page.waitForSelector(this.logInPageTest);
        const welcomeText = await page.$eval(this.logInPageTest, el => el.textContent);
        if (!welcomeText.includes("Welcome")) {
            throw new Error("Login was not successful, 'Welcome' not found.");
        }
        await page.waitForSelector(this.navBar);
    }


}


