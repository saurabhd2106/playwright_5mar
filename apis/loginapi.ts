import { APIRequestContext, expect } from "@playwright/test";
import { RestClient } from "../support/restclient";

export class LoginApi {

    readonly request: APIRequestContext;

    readonly restClient: RestClient;

    constructor(request: APIRequestContext) {

        this.request = request;

        this.restClient = new RestClient(request);

    }


    async loginToApplication(useremail, userpassword){

        const requestpayload = {

            "user": {
                    "email": useremail,
                    "password": userpassword
                }

        }

        const headers = {

            "Content-Type" : "application/json"

        }

      const response = await this.restClient.sendPostRequest("/api/users/login", headers, requestpayload );

      return response;
        
    }

    async verifySuccessfulLogin(response){

        expect(response.ok).toBeTruthy();

    }
}