import {expect, test} from '@playwright/test'

test('Static Dropdown', async({page})=>{
    await page.goto("demo.automationtesting.in/Register.html")
    await page.selectOption('#Skills',{value:"Android"})
    await page.selectOption('#Skills',{label:"Art Design"})
    await page.selectOption('#Skills',{index:3})
    await page.close()
})

test('Multi Static Dropdown', async({page})=>{
    await page.goto("lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption('#multi-select',[{value:"Ohio"},{label:"Texas"},{value:"3"}])

    await page.close();
})
