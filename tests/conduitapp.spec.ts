import {expect, test} from "@playwright/test"

test.describe("Conduit App Test Cases", () => {

    test("Login to Application", async ({page})=>{

        // 1. Prepare the test data

        const username = "test"

        const useremail = "test@test.com"

        const password = "test"

        // 2. Take Action

        await page.goto("http://localhost")

        await page.getByRole("link", {name: "Sign in"}).click()

        await page.getByPlaceholder("Email").fill(useremail)

        await page.getByPlaceholder("Password").fill(password)

        await page.getByRole("button", {name: "Sign in"}).click()

        // 3. Add Assertions

        await expect(page.getByRole("link", {name: username})).toBeVisible()

    })

    test("Add an article", async ({page})=>{

        // 1. Prepare the test data

        const username = "test"

        const useremail = "test@test.com"

        const password = "test"

        // 2. Take Action

        await page.goto("http://localhost")

        await page.getByRole("link", {name: "Sign in"}).click()

        await page.getByPlaceholder("Email").fill(useremail)

        await page.getByPlaceholder("Password").fill(password)

        await page.getByRole("button", {name: "Sign in"}).click()

        // 3. Add Assertions

        await expect(page.getByRole("link", {name: username})).toBeVisible()

        //Add the logic of add Article

        const articleTitle = 'Article title';

        await page.getByRole('link', { name: 'New Article' }).click();
        await page.getByPlaceholder('Article Title').fill(articleTitle);
        await page.getByPlaceholder(`What's this article about?`).fill('test article');
        await page.getByPlaceholder(`Write your article (in markdown)`).fill('writing article');
        // await page.getByPlaceholder(`Enter tags`).fill('testTag');
        await page.getByText('Publish Article').click();
        // await page.getByText('Publish Article').click();
        

        //3. Add assertions

        await expect(page.getByRole('link', { name: 'Edit Article' }).first()).toBeVisible();
        await expect(page.locator('h1')).toHaveText(articleTitle);

    })

})
