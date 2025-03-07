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
})