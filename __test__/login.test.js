import LoginPage from "../Pages/LoginPage";

let loginPageVariable

beforeAll(async()=>{   
    loginPageVariable = new LoginPage()
})
/*afterAll(async () => {
    await browser.close(); // Clean up browser instance after tests
})*/

describe('Signs into the site' ,()=>{   

    it('Goes to the site', async()=>{
    await loginPageVariable.visit()
    })

    it('Fills the fields', async()=>{
        await loginPageVariable.logIn('user@phptravels.com','demouser')
    }, 10000)

    it('Validate that we are in dashboard', async()=>{
        await loginPageVariable.validateLogin()
    }, 9000)


})