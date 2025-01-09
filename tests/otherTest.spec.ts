import {test, expect} from '@playwright/test';

test('My Other Test', async({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
})