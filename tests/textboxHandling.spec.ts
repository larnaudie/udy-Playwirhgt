import {test, expect} from '@playwright/test';

test('Press Sequentially Method', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin')
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123');
    await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close()  
})

test.only('Press Sequentially Method with Delay', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin', {delay:200})
    await page.locator('input[placeholder="Password"]').pressSequentially('admin123', {delay:200});
    await page.locator('input[placeholder="Password"]').press('Enter');
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close()  
})