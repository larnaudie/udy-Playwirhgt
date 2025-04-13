import { test, expect } from "@playwright/test";

const credentials = [
  {
    username: "Admin",
    password: "admin123",
  },
  {
    username: "Admin",
    password: "admin123123",
  },
];

credentials.forEach((element) => {
  test(`Valid Login with credentials ${element.username} and ${element.password}`, async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator('input[placeholder="Username"]').fill(element.username);
    await page.locator('input[placeholder="Password"]').fill(element.password);
    await page.locator('button[type="submit"]').click();
    await page.locator(".oxd-userdropdown-tab").click();
    await page.locator("text=Logout").click();
    await page.close();
  });
});
