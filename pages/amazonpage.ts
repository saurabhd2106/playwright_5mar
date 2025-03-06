import { expect, Locator, Page } from "@playwright/test"

export class AmazonPage {

    readonly page: Page

    readonly searchDropdown: Locator
    readonly searchBox: Locator
    readonly searchButton: Locator

    constructor(page: Page) {

        this.page = page


        this.searchDropdown = page.locator("#searchDropdownBox")
        this.searchBox = page.locator("#twotabsearchtextbox")
        this.searchButton = page.locator("#nav-search-submit-button")


    }

    async searchProduct(productName: string, productCategory: string) {

        await this.searchBox.fill(productName)

        await this.searchDropdown.selectOption(productCategory)

        await this.searchButton.click()
    }

    async getFirstProduct() {

        const firstProduct = this.page.locator("//div[@data-component-type='s-search-result']").first().textContent()

        expect(firstProduct).toContain("apple")

    }

    async getNthProduct(productNumber: number) {

        const firstProduct = this.page.locator("//div[@data-component-type='s-search-result']").nth(productNumber).textContent()

        expect(firstProduct).toContain("apple")

    }

    async getAllProducts(){

        var allProducts = await this.page.locator("//div[@data-component-type='s-search-result']").all()

        for(const product of allProducts)
            console.log(await product.textContent())
    }
}