import BasePage from "../../Pages/BasePage";

export default class navBar extends BasePage {
    constructor(){
        super()
        this.navBar="#navbarSupportedContent"
        this.menu = {
            Hotels: "#navbarSupportedContent > div.nav-item--left.ms-lg-0 > ul > li:nth-child(1) > a",
            Flights: "#navbarSupportedContent > div.nav-item--left.ms-lg-0 > ul > li:nth-child(2) > a",
            Tours: "#navbarSupportedContent > div.nav-item--left.ms-lg-0 > ul > li:nth-child(3) > a",
        }
    }

    async validateNavBarIsPresent(){
       // await page.waitForSelector(this.navBar)
        await page.waitForSelector(this.menu.Flights)
        await page.waitForSelector(this.menu.Hotels)
        await page.waitForSelector(this.menu.Tours)
    }

    async selectMenuItem(menuItem){
        await this.click(this.menu[menuItem])
    }

}