import {test} from "@playwright/test"
import { LoginApi } from "../apis/loginapi"


test.describe("Conduit API testing", ()=>{

    [
        { useremail: "test@test.com", password: "test"},
        { useremail: "test1@test.com", password: "test1"},
        {useremail: "test2@test.com", password: "test2"}
    ].forEach(({useremail, password }) => {

        test(`Login to application ${useremail}`, async ({request}) => {
    
            // Call the API 
    
            var loginapi = new LoginApi(request);
    
            const response = await loginapi.loginToApplication(useremail, password)
    
            // Add assertion
    
            loginapi.verifySuccessfulLogin(response);
        });

    });


   
})