import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/loginpage"

test.describe("Conduit App Test Cases", () => {

    test.beforeAll("Pre Setup", ()=>{
        console.log("This executes before all the test methods")
    })

    test.beforeEach("Setup", async ({page}) => {


        await page.goto("http://localhost")

    })


    test("Login to Application", async ({page})=>{

    

        // 1. Prepare the test data

        const username = "test"

        const useremail = "test@test.com"

        const password = "test"

        // 2. Take Action

        var loginpage = new LoginPage(page);

        await loginpage.loginToApplication(useremail, password);

        // Add assertion

        await loginpage.verifyLoginSuccess(username);

        

    })

    test("Add an article", async ({page})=>{

        // 1. Prepare the test data

        const username = "test"

        const useremail = "test@test.com"

        const password = "test"

        var loginpage = new LoginPage(page);

       await  loginpage.loginToApplication(useremail, password);

       await  loginpage.verifyLoginSuccess(username);

     

        // 3. Add Assertions

       

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

    test.afterEach("Clean Up", ()=>{
        console.log("After each test Method")
    })

    test.afterAll("Post Clean Up", ()=>{
        console.log("After all test methods..")
    })

})
