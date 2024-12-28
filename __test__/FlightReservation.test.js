import LoginPage from "../Pages/LoginPage"
import FlightsPage from "../Pages/FlightsPage"
import NavBar from "./components/NavBar"

let loginPage
let flightsPage
let navbar


/*afterAll(async () => {
    await browser.close(); // Clean up browser instance after tests
})*/

describe('Signs into the site' ,()=>{   
    beforeAll(async()=>{   
        loginPage = new LoginPage()
        flightsPage = new FlightsPage()
        navbar = new NavBar()
    })


    it('Goes to the site then Logs In', async()=>{
    await loginPage.visit()
    await loginPage.logIn('user@phptravels.com','demouser')

    }, 20000)   

    it('Validates nav bar and Goes to the flights page', async()=>{
        await navbar.validateNavBarIsPresent()
        await navbar.selectMenuItem('Flights')
    }, 9000)
    
    it('Goes to the flights page AND Selects a Flight', async()=>{
        console.log("Starting test...");
        await flightsPage.validatePage()
       
        console.log("validatePage completed, proceeding with FlightSelection...");
        await flightsPage.FlightSelection('Bogota', 'San Andres Island', '02-01-2025', 4)
    }, 80000)


    it('Validate that we searched for a flight', async()=>{
        await flightsPage.validateFlights()

    }, 40000)

})