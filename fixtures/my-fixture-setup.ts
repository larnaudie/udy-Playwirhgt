import { test, expect } from '@playwright/test';

export {expect}
export  const myTest = test.extend({
    webApp: async({page}, use) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('input[placeholder="Username"]').fill('Admin')
        await page.locator('input[placeholder="Password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();

        await use(page)

        await page.locator('.oxd-userdropdown-tab').click();
        await page.locator('text=Logout').click();
        await page.close()  
    }
})