import { test, expect } from "@playwright/test";

test("Learning about web dataTable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator('table[name="BookTable"]');

  //Totla de filas y columnas
  const columnas = table.locator("tr th");
  const filas = table.locator("tbody tr");

  console.log("Number of Columns: ", await columnas.count());
  console.log("Number of Rows: ", await filas.count());

  expect(await columnas.count()).toBe(4);
  expect(await filas.count()).toBe(7);
});

test("Interact with specific row", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const tabla = await page.locator("#productTable");
  const columnas = tabla.locator("thead tr th");
  const filas = tabla.locator("tbody tr");

  const matchedRow = filas.filter({ has: page.locator("td"), hasText: "Laptop" });

  await matchedRow.locator("input").check();
});

test("multiple checbox selected", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const tabla = await page.locator("#productTable");
  const columnas = tabla.locator("thead tr th");
  const filas = tabla.locator("tbody tr");

  await selectProduct(filas, page, "Laptop");
  await selectProduct(filas, page, "SmartPhone");
  await selectProduct(filas, page, "Smartwatch");
});

async function selectProduct(rows, page, productName) {
  const matchedRow = rows.filter({ has: page.locator("td"), hasText: productName });
  await matchedRow.locator("input").check();
}

test("Save multiple values", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const tabla = await page.locator("#productTable");
  const columnas = tabla.locator("thead tr th");
  const filas = tabla.locator("tbody tr");

  for (let i = 0; i < (await filas.count()); i++) {
    const fila = filas.nth(i);
    const datoFila = fila.locator("td");
    for (let j = 0; j < (await datoFila.count()); j++) {
      const dato = await datoFila.nth(j).textContent();
      console.log(dato);
    }
  }
});

test("Navigate trhough pages", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const tabla = await page.locator("#productTable");
  const columnas = tabla.locator("thead tr th");
  const filas = tabla.locator("tbody tr");
  const pages = page.locator(".pagination li a");
  const numberOfPages = pages.count()   

  for (let k = 0; k < await numberOfPages; k++) {

    if(k>0){
        await pages.nth(k).click();

    }
    for (let i = 0; i < (await filas.count()); i++) {
      const fila = filas.nth(i);
      const datoFila = fila.locator("td");
      for (let j = 0; j < (await datoFila.count()); j++) {
        const dato = await datoFila.nth(j).textContent();
        console.log(dato);
      }
    }
  }
});
