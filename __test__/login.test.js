import LoginPage from "./LoginPage"

let loginPageVariable

beforeAll(async()=>{
    loginPageVariable = new LoginPage()
})

describe('Signs into the site' ,()=>{   

    it('Goes to the site', async()=>{

    await loginPageVariable.visit()
    })

    it('Fills the fields', async()=>{
        await loginPageVariable.logIn('email@test.test','testpassword')
    }, 10000)

    it('Validate that we are in dashboard', async()=>{
        await loginPageVariable.validateLogin()
    }, 20000)


})