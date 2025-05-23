import {test, expect} from '@playwright/test';

test('Login Test', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[placeholder="Username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close()  
})
