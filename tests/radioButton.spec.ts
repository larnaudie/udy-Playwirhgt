import {test, expect} from '@playwright/test';

test('Radio Button', async({page})=>{
    await page.goto("demo.automationtesting.in/Register.html") 
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');
    //Way 1
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    //Way 2
    expect(await maleRadioButton.isChecked()).toBeFalsy()
    expect(await femaleRadioButton.isChecked()).toBe(false);

    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();
    expect(await maleRadioButton.isChecked()).toBeTruthy()

    await page.close()  
})