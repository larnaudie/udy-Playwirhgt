import { test, expect } from "@playwright/test";

test("Example of why this will field without iframe", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");
  await page.locator('[class*="tox-notification"] div button').click();
  await page.locator("#tinymce").fill("holaaaaa");
});

test("page.frame Example", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const allFrames = page.frames();
  const allFramesCount = allFrames.length;
  console.log(`Total Frames count is; ${allFramesCount}`);
  const frame1 = page.frame({ url: "https://ui.vision/demo/webtest/frames/iframe1.html" });
  await frame1?.locator('input[name="mytext1"]').fill("holaaAAAaaa");
  await page.waitForTimeout(5000);
  await page.close();
});

test("page.frameLocator Example", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await frame1?.locator('input[name="mytext1"]').fill("holaaaaaaa");
  await page.waitForTimeout(5000);
  await page.close();
});

test("Nested frames Handling", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
  const childFrames = frame3?.childFrames();
  await childFrames?.[0].locator('//*[@id="i6"]/div[3]/div').check({force: true});
  await childFrames?.[0].locator('//*[@id="i9"]/div[3]/div').check({force: true});
  await page.waitForTimeout(5000);
  await page.close();
});
