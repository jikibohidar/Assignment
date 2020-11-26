export default class BasePage{

    async wait(time){
            await page.waitFor(time)
    }
    async getTitle(){
        return await page.title();
    }
    async getUrl(string){
        return await page.url(string);
    }

    async waitAndClick(selector){
        await page.waitForSelector(selector)
        await page.click(selector)
    }
    
    async waitAndType(selector,text){
        await page.waitForSelector(selector)
        await page.type(selector,text)
    }

    async getText(selector){
        await page.waitForSelector(selector)
        const text = await page.$eval(selector, e =>e.innerHTML)
        return text                                                                                 
    }

    async getCount(selector){
        await page.waitForSelector(selector)
        const count= await page.$$eval(selector, items=>items.length)
        return count
    }

    async waitForXPathAndClick(xpath){
        await page.waitForXPath(xpath)
        const elements = await page.$x(xpath)
        if (elements.length>1) // if the count of xpath  is more than 1 show the warning
        {  
            console.warn("waitForXpathAndClicked result more than 1 result")
        }
        await elements[0].click();
    }

    async isElementVisible(selector){
        let visible = true; //As by default element is true
        await page.waitForSelector(selector, { visible: true, timeout : 3000})//It will wait for the elemnt to be visible within 30 sec
        .catch(()=>{
            visible = false;//if element is not visible in 30 sec set the visible variable to false emans element is not visible and then return the visible value

        })

        return visible;
    }

    async isXpathVisible(xpath){
        let  visible= true
        await page.waitForXpath(xpath,{visible: true, timeout : 3000})
        .catch(()=>{
            visible= false;
        })
         return visible
    }
}