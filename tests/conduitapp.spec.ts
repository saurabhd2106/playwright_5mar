import {test} from "@playwright/test"

test.describe("Conduit App Test Cases", () => {

    test("Login to Application", async ({page})=>{

        // 1. Prepare the test data

        const username = "test@test.com"

        const password = "test"

        // 2. Take Action

        await page.goto("http://localhost")

        await page.getByRole("link", {name: "Sign in"}).click()

        await page.getByPlaceholder("Email").fill(username)

        await page.getByPlaceholder("Password").fill(password)

        await page.getByRole("button", {name: "Sign in"}).click()
        
        // 3. Add Assertions

    })

})
