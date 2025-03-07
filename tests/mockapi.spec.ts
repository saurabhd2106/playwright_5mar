import {expect, test} from "@playwright/test"
import { LoginApi } from "../apis/loginapi"


test.describe("Conduit API testing", ()=>{


    test("Mock Tags API with 500 error", async ({page}) => {

        await page.route("/api/tags", route => route.fulfill({

            status: 500,
            body: "500 Server Error"

        }))

        await page.goto("http://localhost")

        await expect(page.getByText("Popular Tags").first()).toBeVisible();

        await expect(page.getByText("Cannot load popular tags...")).toBeVisible();


        
    })

    test("Multi Tag Scenario", async ({page}) =>{

        const testdata = {"tags":["selenium","test", "cypress", "playwright", "katalon studio"]}



        await page.route("/api/tags", route => route.fulfill({

            status: 200,
            body: JSON.stringify(testdata)

        }))

        await page.goto("http://localhost")

        const allTags = await page.locator(".tag-list > a").all()

        expect(allTags.length).toBe(5)

        

    })
})