import { myTest, expect } from '../fixtures/my-fixture-setup';


myTest('Login Test', async({ webApp })=>{
    const text = webApp.locator('.orangehrm-attendance-card-state')
    console.log(await text.textContent());
    expect(text).toHaveText('Punched In');
})
