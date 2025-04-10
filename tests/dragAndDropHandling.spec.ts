import { test, expect } from "@playwright/test";

test("Drag and Drop Handling - Approach 2", async ({ page }) => {
  await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
  const washingtonCard = page.locator('//div[@id="box3"] [text()="Washington"]');
  const unitedStatesBox = page.locator('//div[@id="box103"] [text()="United States"]');
  await washingtonCard.dragTo(unitedStatesBox);
});


test.only("Drag and Drop Handling - Approach 1", async ({ page }) => {
  await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
  const washingtonCard = page.locator('//div[@id="box3"] [text()="Washington"]');
  const unitedStatesBox = page.locator('//div[@id="box103"] [text()="United States"]');

  await washingtonCard.hover();
  await page.mouse.down();
  await unitedStatesBox.hover();
  await page.mouse.up();
  await page.waitForTimeout(5000);
});
