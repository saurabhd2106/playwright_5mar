import {test} from "@playwright/test"
import { LoginApi } from "../apis/loginapi"


test.describe("Conduit API testing", ()=>{


    test("Login to application", async ({request}) => {

        // Prepare the test data
        const useremail = "test@test.com"

        const userpassword = "test"

        // Call the API 

        var loginapi = new LoginApi(request);

        const response = await loginapi.loginToApplication(useremail, userpassword)

        // Add assertion

        loginapi.verifySuccessfulLogin(response);
    })
})