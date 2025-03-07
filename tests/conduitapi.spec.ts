import { expect, request, test } from "@playwright/test"

import users from "../test_data/users.json"
import common_headers from "../test_data/common_header.json"

test.describe("API Testing", () => {


    test("Get Tags API", async ({ request }) => {

        const response = await request.get("/api/tags", {})

        expect(response.ok()).toBeTruthy()

        const responseData = await response.json()

        expect(responseData.tags[0]).toBe("selenium")

        expect(responseData.tags[1]).toBe("test")



    })

    test("Post API - Signin", async ({ request }) => {

        const username = "test@test.com"
        const password = "test"

        const response = await request.post("/api/users/login", {
            data: users

            ,

            headers: common_headers
        })

        expect(response.ok()).toBeTruthy()

        const responseData = await response.json();

        expect(responseData.user.email).toBe(username)

        const token = responseData.user.token

        console.log(token)

    })

    test("Add Article", async ({ request }) => {

        const username = "test@test.com"
        const password = "test"

        const response = await request.post("/api/users/login", {
            data:

            {
                "user": {
                    "email": username,
                    "password": password
                }
            }

            ,

            headers: {

                "Content-Type": "application/json"

            }
        })

        expect(response.ok()).toBeTruthy()

        const responseData = await response.json();


        const token = responseData.user.token


        const articleResponse = await request.post("/api/articles", {
            data:
            {
                "article": {
                    "title": "Test Articles",
                    "description": "test ",
                    "body": "test",
                    "tagList": [
                        "test"
                    ]
                }
            }

            ,
            headers: {

                "Content-Type": "application/json",

                "Authorization": "Token " + token

            }
        })

        expect(articleResponse.ok()).toBeTruthy()

    })
})