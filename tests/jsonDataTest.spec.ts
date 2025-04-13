import { test, expect } from "@playwright/test";
import * as jsonFile from '../tests/testData/testData.json'

test(`Valid Login with credentials ${jsonFile.validUsername} and ${jsonFile.validatePassword}`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill(jsonFile.validUsername);
  await page.locator('[name="password"]').fill(jsonFile.validatePassword);
  await page.locator('button[type="submit"]').click();
  await page.locator(".oxd-userdropdown").click();
  await page.locator(".oxd-topbar-header li:nth-child(4)").click();
  await page.close();
});

test(`Invalid Login with credentials ${jsonFile.invalidUsername} and ${jsonFile.invalidPassword}`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.locator('[name="username"]').fill(jsonFile.invalidUsername);
  await page.locator('[name="password"]').fill(jsonFile.invalidPassword);
  await page.locator('button[type="submit"]').click();
  await expect(page.locator(".oxd-alert--error")).toBeVisible();
});
