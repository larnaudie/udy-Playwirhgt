import { test, expect } from "@playwright/test";

test("Single Tab Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");

  const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    page.click('button:has-text("click")')
  ])
  await newTab.waitForLoadState();
  const text = await newTab.locator('body > div > main > section.row.td-box.td-box--gradient.-bg-selenium-green.p-2 > div > div > div > h1').textContent();
  console.log('Text from new tab', text);
  await newTab.waitForTimeout(5000);
  await newTab.close();
});

test("Single Window Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click('button[oneclick="newwindow()]')
  ])
  await newWindow.waitForLoadState();
  const text = await newWindow.locator('body > div > main > section.row.td-box.td-box--gradient.-bg-selenium-green.p-2 > div > div > div > h1').textContent();
  console.log('Text from new tab', text);
  await newWindow.waitForTimeout(5000);
  await newWindow.close();
});

test.only("Multiple Tab Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.locator('a[href="#Multiple"]').click();

  const [multipleTab] = await Promise.all([
    page.waitForEvent("popup"),
    await page.click('button[onclick="multiwindow()"]')
  ])
  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();
  console.log("PAGES LENGHT: //////////////////" + pages.length);

  await pages[2].locator('#email').fill('hola@hola.com')
  await multipleTab.waitForTimeout(5000);

  const text = await pages[1].locator('body > div > main > section.row.td-box.td-box--gradient.-bg-selenium-green.p-2 > div > div > div > h1').textContent();
  console.log('Text from new tab', text);
  await multipleTab.waitForTimeout(5000);

  await pages[1].close()
  await pages[2].close()

});