export default class BasePage {
async getTitle() {
    return await page.title()
}
async getUrl() {
    return await page.url()
}
async getText(selector) {
    try {
        await page.waitForSelector(selector)
        return await page.$eval(selector,(el)=>el.textContent)
    } catch (error) {
        throw new error('Error while getting selected text ${selector}')
    }
    
}

async getAttribute(selector, attribute) {
    try {
        await page.waitForSelector(selector)
        return await page.$eval(selector,(el)=>el.getAttribute(attribute))
    } catch (error) {
        throw new error('Error while getting selected text ${selector}')
    }
    
}


async getValue(selector) {
    try {
        await page.waitForSelector(selector)
        return await page.$eval(selector,(el)=>el.getValue(attribute))
    } catch (error) {
        throw new error('Error while getting Value of selector ${selector}')
    }
    
}


async getCount(selector) {
    try {
        await page.waitForSelector(selector)
        // double $$ returns arreglo
        return await page.$$eval(selector,(el)=>el.length)
    } catch (error) {
        throw new error('Error while getting total amount ${selector}')
    }
    
}

//the options are received in an empty parameter{} so its an optional parameter it can be accepted empty and works for css and xpath selectors
async type(selector,text,opts={}) {
    try {
        await page.waitForSelector(selector)
        await page.type(selector,text,opts)
    } catch (error) {
        try {
            const Typeelement = await page.waitForXPath(selector)
            await Typeelement.type(selector,text,opts)
        } catch (error) {
            throw new error('Error while Typing in selector: ${selector}')
        }
    }
    
}
async click(selector) { //This function works for css selectors and Xpath Selectors
    try {
        await page.waitForSelector(selector)
        await page.click(selector)
    } catch (error) {
        try {
            const element = await page.waitForXPath(selector)
            await element.click()
        } catch (error) {
            throw new error('Error while clicking ${selector}')
        }
    }
    
}

async doubleCLick(selector) {
    try {
        await page.waitForSelector(selector)
        await page.click(selector,{ clickCount: 2 })
    } catch (error) {
        throw new error('Error while Double CLicking selector: ${selector}')
    }
    
}

async rightClick(selector){
    try {
        await page.waitForSelector(selector)
        await page.click(selector, { button: 'right'})
    } catch (error) {
        throw new Error(`Error when right clicking ${selector}`)
    }
}




//to select an option within an html element type: select
 async selectType (page, selector, opts) {
    try {
        await page.waitForSelector(selector)
        return await page.select(selector, opts)
    } catch (error) {
        throw new error(`Error when trying to select an option within the selector: ${selector}`)
    }
}

async wait(time) {
    await new Promise(r => setTimeout(r, time))
    
}




}