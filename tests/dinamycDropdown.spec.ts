import { Expect, test } from "@playwright/test";

test("Dinamic Dropdown", async ({ page }) => {
  await page.goto("demo.automationtesting.in/Register.html");
  await page.locator("span[role=”combobox”]").click();
  await page.locator('input[role="textboc"]').fill("India");

  // await page.locator('ul#select2-country-results>li').click()
  await page.locator("ul#select2-country-results").locator("li",{hasText:"India"}).click();

  await page.close();
});
