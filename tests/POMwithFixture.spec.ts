import { test, expect } from '../fixtures/pomFixtures';

test("Single Tab Handling", async ({ page, landingPage , homePage, signInPage, settingsPage}) => {
  
  await page.goto("https://react-redux.realworld.io/");
  await landingPage.clickSignInButton();
  await signInPage.enterEmailId("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButton();
  await settingsPage.clickLogoutButton();

  await page.close();
});
