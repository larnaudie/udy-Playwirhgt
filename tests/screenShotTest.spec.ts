import { test, expect } from '@playwright/test';

test("Test 1", async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com')
    await page.locator('input[placeholder="Username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('admin123');
    //await page.screenshot({path: 'tests/screenshots/' + 'screenshot.png' })
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    //await page.screenshot({path: 'tests/screenshots/' + 'homePage.png' })
    await page.locator('text=Logout').click();
    await page.close()
});



