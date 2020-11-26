import BasePage from "../Pages/BasePage.js";
import config from "../Tenderdocument/config";

export default class HealthTender extends BasePage {
    async visit() {
        //Visit the tender
        await page.goto(config.base_url, { waitUntil: 'networkidle2' });
        await page.setViewport({ width: 1350, height: 650 });
    }
    async selectEnglish(){
        //Select English
        await this.waitForXPathAndClick("(//img[@src='/modules/gtranslate/gtranslate/gtranslate-files/blank.png'])[3]")
        await this.wait(5000)
    }

    async ispageElementVisible() {
        //Verify tender heading
        await page.waitForXPath("//font[.='Price Record Intent Notice 151/2020 - HEALTH']", { hidden: false });
        //Verify logo
        await page.waitForXPath("//img[@src='/sites/default/files/logopbh.png']", { hidden: false });
    }

    async fetchData(){

        let data=await page.evaluate(()=>{
        let OpenDate=document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font > font').innerText
        let Objective=document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6) > font > font').innerText
        let ClosingDate=document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19) > font > font').innerText
        
    return{OpenDate,
           Objective,
           ClosingDate
           }
    })
    
    console.log(data);
   
    }
    
}
