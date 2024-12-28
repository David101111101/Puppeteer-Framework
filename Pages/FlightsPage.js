import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    constructor() {
        
        super(); // Pass the page instance to the BasePage constructor, its necesary when heredando clases de otros archivos
        this.mainDiv = '#flights-search'
        this.inputs = {
            typeFromInputField: '#fadein > span > span > span.select2-search.select2-search--dropdown > input',
           ClickFromInputField: '#onereturn > div:nth-child(1) > div.input-items.from_flights > div.form-floating > span > span.selection',
            typeToInputField: '#fadein > span > span > span.select2-search.select2-search--dropdown > input',
            ClickToInputField: '#onereturn > div:nth-child(2) > div.input-items.flights_arrival.to_flights > div.form-floating > span > span.selection',
            date: '#departure',
            passengers: '#onereturn > div.col-lg-2 > div > div > div > a',
            search: '#onereturn > div:nth-child(5) > button',
            FirstOption: '#select2--results > li',
            moreAdultsPassengers: '#onereturn > div.col-lg-2 > div > div > div > div > div.dropdown-item.adult_qty > div > div > div.qtyInc',

        }
    }

  async validatePage() {
    console.log("Starting page validation...");
    try {    
    await page.waitForSelector(this.mainDiv)
    await page.waitForSelector(this.inputs.date)
    await page.waitForSelector(this.inputs.passengers)
    await page.waitForSelector(this.inputs.search)  
    } catch (e) {
        console.log("Error in page validation:", e.message);
        throw new Error(`Page validation failed: ${e.message}`);
    }
  }

  async FlightSelection(from, to, date, passengerAmount) {
    console.log(` ${from} ${to} ${date} ${passengerAmount}`);
  //  await page.focus(this.inputs.from); // Focus the input explicitly
  console.log("Select From city");
    // Step 1: Select "From" city
    await this.click(this.inputs.ClickFromInputField)            // Open dropdown
    await this.type(this.inputs.typeFromInputField, from)       // Type city name
    await page.waitForSelector(this.inputs.FirstOption)         //Ensure the first option appears
    await this.click(this.inputs.FirstOption)                  // Click the first option
                     
    console.log("Select To city");

     // Step 2: Select "To" city
    await this.click(this.inputs.ClickToInputField)             // Open dropdown
    await this.type(this.inputs.typeToInputField, to)           // Type destination city name
    await page.waitForSelector(this.inputs.typeToInputField)    // Wait for the first option to appear
    await this.click(this.inputs.FirstOption)                    // Click on the first option

    // Step 3: Select the flight date
    await this.tripleClick(this.inputs.date)
    await this.type(this.inputs.date, date)

    // Step 4: Handle passengers if more than 1
    if (passengerAmount !== 1) {
      await this.click(this.inputs.passengers)
      await page.waitForSelector(this.inputs.moreAdultsPassengers) //Awaits for the dropdown to appear
      for(let i = 0; i< passengerAmount -1; i++){
        await this.click(this.inputs.moreAdultsPassengers) 
      }
    }

    await this.click(this.inputs.search)
  }

   // Step 5: Search for the flight
  async validateFlights() {

    await this.wait(30)
  }

}