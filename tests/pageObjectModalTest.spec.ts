import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing.page";
import { SignInPage } from "../pages/signIn.page";
import { HomePage } from "../pages/home.page";
import { SettingsPage } from "../pages/settings.page";

test("Single Tab Handling", async ({ page }) => {
  
  await page.goto("https://react-redux.realworld.io/");

  const landingPage = new LandingPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const settingsPage = new SettingsPage(page);

  await landingPage.clickSignInButton();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();

  await page.close();
});
