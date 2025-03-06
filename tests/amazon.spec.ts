import {test} from "@playwright/test"
import { AmazonPage } from "../pages/amazonpage"

test.describe("Amazon Test Cases", ()=>{

    test("Search Product Test case", async ({page})=>{

        const productName = "Apple Watch"

        const productCategory = "Electronics"

       await page.goto("https://amazon.in")

        var amazonpage = new AmazonPage(page);

        await amazonpage.searchProduct(productName, productCategory)



    })
})