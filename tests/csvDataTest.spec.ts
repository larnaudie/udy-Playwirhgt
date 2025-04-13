import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import {parse} from "csv-parse/sync";

const csvData = parse(fs.readFileSync(path.join(__dirname, "testData", "testData.csv")), {
  columns: true,
  skip_empty_lines: true,
  trim: true
})

test(`Valid Login with credentials`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await console.log(csvData[0].username);
  await console.log(csvData[0].password);
  await page.locator('[name="username"]').fill(csvData[0].username);
  await page.locator('[placeholder="Password"]').fill(csvData[0].password);
  await page.locator('button[type="submit"]').click();
  await page.locator(".oxd-userdropdown").click();
  await page.locator(".oxd-topbar-header li:nth-child(4)").click();
});

test(`Invalid Login with credentials`, async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await console.log(csvData[1].username);
  await console.log(csvData[1].password);
  await page.locator('[name="username"]').fill(csvData[1].username);
  await page.locator('[placeholder="Password"]').fill(csvData[1].password);
  await page.locator('[type="submit"]').click();
  await expect(page.locator(".oxd-alert-content-text")).toBeVisible();
});
