// import { expect } from "chai";
// import config from "./config";
// import HealthTender from "../Pages/HealthTender.js"
import HealthTender from "../Pages/HealthTender.js";

describe("Tender Document ",()=>{
    let healthtender;

    beforeAll(async()=>{
    jest.setTimeout(350000);
    healthtender= new HealthTender();
    })
    it("Visit the tender",async()=>{
        await healthtender.visit()
        await healthtender.wait(5000)
        await healthtender.selectEnglish()
        await healthtender.ispageElementVisible()
    
    })

    it("Fetch Data",async()=>{
        await healthtender.fetchData()
    })

    
})

// describe("Tender document",()=>{
//     beforeAll(async() =>{
//         jest.setTimeout(350000);
               
//         })
//         it("Testing",async()=>{
//             await page.goto("https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020")
//         })
    
// })