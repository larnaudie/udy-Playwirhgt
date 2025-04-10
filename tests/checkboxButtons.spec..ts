import {test, expect} from '@playwright/test';

test('Radio Button', async({page})=>{
    await page.goto("demo.automationtesting.in/Register.html")
    const checkbox1 = page.locator('#checkbox1');
    const checkbox2 = page.locator('#checkbox2');
    const checkbox3 = page.locator('#checkbox3');

    //way 1 - Assert
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(checkbox3).not.toBeChecked();

    //way 2 - Assert
    expect(await checkbox1.isChecked()).toBeFalsy();
    expect(await checkbox2.isChecked()).toBeFalsy();
    expect(await checkbox3.isChecked()).toBeFalsy();

    await checkbox1.check();
    await checkbox2.check();
    await checkbox3.check();

    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();
    expect(checkbox3).toBeChecked();

    await page.close();
})