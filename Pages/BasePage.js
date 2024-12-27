export default class BasePage {
    
   
    async getTitle() {
        return await page.title();
    }

    async getUrl() {
        return await page.url();
    }
    async getText(selector) {
        try {
            await page.waitForSelector(selector, { visible: true });
            return await page.$eval(selector, el => el.textContent);
        } catch (err) {
            throw new Error(`Error while getting text for selector: ${selector} - ${err.message}`);
        }
    }

    async getAttribute(selector, attribute) {
        try {
            await page.waitForSelector(selector, { visible: true });
            return await page.$eval(selector, el => el.getAttribute(attribute));
        } catch (err) {
            throw new Error(`Error while getting attribute "${attribute}" for selector: ${selector} - ${err.message}`);
        }
    }


async getValue(selector) {
    try {
        await page.waitForSelector(selector)
        return await page.$eval(selector, el => el.value);
    } catch (err) {
        throw new Error('Error while getting Value of selector ${selector}  - ${err.message}')
    }
    
}


async getCount(selector) {
    try {
        await page.waitForSelector(selector, { visible: true });
        return await page.$$eval(selector, elements => elements.length);
    } catch (err) {
        throw new Error(`Error while getting count for selector: ${selector} - ${err.message}`);
    }
}


async type(selector, text, opts = {}) {
    try {
        await page.type(selector, text, opts)

    } catch (e) {
        try {
            const element1 = await page.waitForXPath(selector)
            await element1.type(text)
         } catch (e) {

        throw new Error(`Error while typing into selector: ${selector} - ${e.message}`);
         }
    }
}

async click(selector) {
    try {
      await page.waitForSelector(selector)
      await page.click(selector)
    } catch (e) {
        try {
            const element = await page.waitForXPath(selector)
            await element.click()  
         } catch (e) {
            throw new Error(`Error while clicking selector: ${selector}`)
        }
    }
}

async doubleClick(selector) {
    try {
        await page.waitForSelector(selector, { visible: true });
        await page.click(selector, { clickCount: 2 });
    } catch (err) {
        throw new Error(`Error while double-clicking selector: ${selector} - ${err.message}`);
    }
}

async rightClick(selector) {
    try {
        await page.waitForSelector(selector, { visible: true });
        await page.click(selector, { button: 'right' });
    } catch (err) {
        throw new Error(`Error when right-clicking selector: ${selector} - ${err.message}`);
    }
}




//to select an option within an html element type: select
 async selectType (page, selector, opts) {
    try {
        await page.waitForSelector(selector)
        return await page.select(selector, opts)
    } catch (err) {
        throw new Error(`Error when trying to select an option within the selector: ${selector}`)
    }
}

async wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}




}