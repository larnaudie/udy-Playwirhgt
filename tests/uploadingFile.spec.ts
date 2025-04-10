import { test, expect } from "@playwright/test";

test("Uploading File", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  const uploading = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("input[name='files[]']").click()
  ])
  await uploading[0].setFiles(['filesToUpload/310881.png','filesToUpload/1383269.png'])
  await page.waitForTimeout(5000);
});

test("Uploading File- Camino 2", async ({ page }) => {
  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  await page.setInputFiles("input[name='files[]']",['filesToUpload/310881.png','filesToUpload/1383269.png']);
  await page.waitForTimeout(5000);
});
