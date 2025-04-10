import { test, expect, type Page } from '@playwright/test';
import {DateTime} from 'luxon'
/*
test("Calendar Handling", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  let date = "2025/10/30"
  await page.locator('#birthday').fill(date);
  await page.waitForTimeout(5000);
  await page.close();
});*/

test.only("Calendar using luxon dependency", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  await page.locator('input[placeholder="Start date"]').click();
  //Select Past Date
  selectDate(30, "June 2019", page)
  await page.waitForTimeout(5000);
  await page.reload();

  //Select Future Date
  await page.locator('input[placeholder="End date"]').click();
  selectDate(25, "September 2025", page)
  await page.waitForTimeout(5000);
  await page.close();

  
});

async function selectDate(date:Number, dateToSelect:String, page){
  const monthYear = await page.locator('.datepicker-days .datepicker-switch');
  const prevBtn = await page.locator("div[class='datepicker-days'] th[class='prev']")
  const nextBtn = await page.locator("div[class='datepicker-days'] th[class='next']")
  const formattedMonth = DateTime.fromFormat(dateToSelect, 'MMMM yyyy'); 
  while(await monthYear.textContent() !== dateToSelect){
    if(await formattedMonth < DateTime.fromJSDate(new Date())){
      await prevBtn.click();
    }
    else{
      await nextBtn.click();
    }
  }
  await page.locator(`//td[@class="day"] [text()=${date}]`).click();
}