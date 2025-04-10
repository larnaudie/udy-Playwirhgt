import { expect, test } from "@playwright/test";

test('simple alert',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.locator('button[onclick="jsAlert()"]').click();   
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.close()
})

test('simple alert handling',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message()
        expect(alertMessage).toEqual("I am a JS Alert")
        await alert.accept()
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    })
    await page.locator('button[onclick="jsAlert()"]').click();   
    await page.close()
})

test('Confirm Alert',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message()
        expect(alertMessage).toEqual("I am a JS Confirm")
        await alert.accept()
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    })
    await page.locator('button[onclick="jsConfirm()"]').click();   
    await page.close()
})

test('Cancel Alert',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message()
        expect(alertMessage).toEqual("I am a JS Confirm")
        await alert.dismiss()
        await expect(page.locator('#result')).toHaveText('You successfully clicked on CANCEL')
    })
    await page.locator('button[onclick="jsConfirm()"]').click();   
    await page.close()
})

test('Prompt Alert - Ok Button',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message()
        expect(alertMessage).toEqual("I am a JS Prompt")
        await alert.accept("Playwright")
        await expect(page.locator('#result')).toHaveText('You entered: Playwright')
    })
    await page.locator('button[onclick="jsPrompt()"]').click();   
    await page.close()
})

test('Prompt Alert - Cancel Button',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog", async(alert)=>{
        const alertMessage = alert.message()
        expect(alertMessage).toEqual("I am a JS Prompt")
        await alert.dismiss()
        await expect(page.locator('#result')).toHaveText('You entered: null')
    })
    await page.locator('button[onclick="jsPrompt()"]').click();   
    await page.close()
})