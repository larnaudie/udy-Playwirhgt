import { test as baseTest } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { SignInPage } from "../pages/signIn.page";
import { HomePage } from "../pages/home.page";
import { SettingsPage } from "../pages/settings.page";

type pages = {
    landingPage: LandingPage,
    signInPage: SignInPage,
    homePage: HomePage,
    settingsPage: SettingsPage
}

const testPages = baseTest.extend<pages>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    settingsPage: async ({ page }, use) => {
        await use(new SettingsPage(page));
    }
})

export const test = testPages;
export const expect = test.expect;