import {expect, test} from "@playwright/test"

test.describe("API Testing", ()=> {


    test("Get Tags API", async ({ request })=>{

       const response = await request.get("/api/tags", {})

       expect(response.ok()).toBeTruthy()

       const responseData = await response.json()

       expect(responseData.tags[0]).toBe("selenium")

       expect(responseData.tags[1]).toBe("test")

       

    })
})