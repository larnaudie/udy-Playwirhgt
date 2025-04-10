import { test, expect, type Page } from "@playwright/test";
import { DateTime } from "luxon";
import path from 'path';

test("Calendar using luxon dependency", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/FileDownload.html#google_vignette");
  await page.locator("#textbox").click();
  await page.locator("#textbox").pressSequentially("Automation Testing");
  await page.locator("#createTxt").click();

  const download = await Promise.all([
    page.waitForEvent("download"),
     page.locator("#link-to-download").click()
  ]);

  const path = await download[0].path();
  console.log("Path: ", path);

  //Camino 1: Guardar archivo con nombre sugerido
  //const fileName = await download[0].suggestedFilename();
  //await download[0].saveAs(fileName);

  //Camino 2: Con nombre personalizado
  const fileName = "archivo_de_prueba";
  await download[0].saveAs(fileName);

});
