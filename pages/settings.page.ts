import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage.page";

export class SettingsPage extends BasePage {
    private readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.logoutButton = page.locator('//button[normalize-space()="Or click here to logout"]');
    }

    async clickLogoutButton() {
        await this.clickElement(this.logoutButton);
    }
}