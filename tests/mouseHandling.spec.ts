import {test, expect} from '@playwright/test';

test('Single click', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events")
    await page.locator('#click-area').click();
    await expect(page.locator('#click_type')).toHaveText('Click')
})

test('Double click', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events")
    await page.locator('#click-area').dblclick();
    await expect(page.locator('#click_type')).toHaveText('Double Click')
    
})

test('Right Click', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events")
    await page.locator('#click-area').click({button: 'right'});
    //await page.pause();
    await expect(page.locator('#click_type')).toHaveText('Right Click')
    
})