import {expect, test} from "@playwright/test"

test("Alert Handling", async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async(dialogBox)=>{

        expect(dialogBox.type()).toBe("alert")

        expect(dialogBox.message()).toEqual("I am a JS Alert")

        await dialogBox.accept()

    })

    await page.getByRole("button", {name: "Click for JS Alert"}).click()



})