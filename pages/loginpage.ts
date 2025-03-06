import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    // Constants and the variables are defined here

    readonly page: Page;

    readonly signinLink: Locator;
    readonly emailField: Locator;
    readonly password: Locator;
    readonly signinButton: Locator;
    readonly userProfile: Locator;

    constructor(page: Page) {
        
        this.page = page

        this.signinLink = page.getByRole("link", {name: "Sign in"});

        this.emailField = page.getByPlaceholder("Email");

        this.password = page.getByPlaceholder("Password");

        this.signinButton = page.getByRole("button", {name: "Sign in"});


    }

    // Logics


    async loginToApplication(emailId: string, password: string){

                await this.signinLink.click()
        
                await this.emailField.fill(emailId)
        
                await this.password.fill(password)
        
                await this.signinButton.click()
    }

    async verifyLoginSuccess(username: string){

        await expect(this.page.getByRole("link", {name: username})).toBeVisible()

    }



}