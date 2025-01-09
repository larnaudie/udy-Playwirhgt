import {test, expect} from '@playwright/test';

test('Assertion Test', async({page})=>{
    await page.goto("https://sripriyapkulkarni.com/")
    await page.locator('text=Automation Practice').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();
})

test('Add and remove elements', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
    await expect(page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
    await page.close();
})

test('Enable and Disable Assertion', async({page})=>{
    await page.goto("https://letcode.in/buttons")
    await expect(page.locator('#property')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
    await page.close();
})

test('Text Match/Mismatch assertion', async({page})=>{
    await page.goto("https://letcode.in/buttons")
    await expect(page.locator('#color')).toHaveText("What is my color?");
    await expect(page.locator('#color')).not.toHaveText("What is my favourite color?");
    await page.close();
})

test('Attribute assertion', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name', 'username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class', /.*oxd-input/);
    await page.close();
})

test('URL assertion', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //Full URL Assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Partial URL Assertion
    await expect(page).toHaveURL(/demo.orangehrmlive/);
    await page.close();
})

test('Title assertion', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //Full URL Assertion
    await expect(page).toHaveTitle('OrangeHRML');
    //Partial URL Assertion
    await expect(page).toHaveTitle(/.*HRML/);
    await page.close();
})

test.only('Screenshot assertion', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveScreenshot();
    await page.close();
})