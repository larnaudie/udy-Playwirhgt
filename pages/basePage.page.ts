import { Locator, Page } from "@playwright/test";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(element: Locator) {
        await element.click();
    }

    async fillFromField(element: Locator, value: string) {
        await element.fill(value);
    }

    async getElementText(element: Locator) {
        return await element.innerText();
    }

    async waitForElementVisible(locator: string) {
        await this.page.waitForSelector(locator, { state: "visible" });
    }

    async waitForElementHidden(locator: string) {
        await this.page.waitForSelector(locator, { state: "hidden" });
    }

    async takeScreenshot(fileName: string) {
        await this.page.screenshot({ path: `./screenshots/${fileName}.png` });
    }
}


