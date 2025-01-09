import { test, expect } from '@playwright/test';

test('using codegen', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto('https://www.google.com/search?q=amazon+uruguay&oq=amazon+uruguay&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI2ODNqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Sitio oficial de Amazon.com' }).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByPlaceholder('Buscar en Amazon').click();
  await page.getByPlaceholder('Buscar en Amazon').fill('Celulares Alta Gama');
  await page.getByPlaceholder('Buscar en Amazon').press('Enter');
  await page.getByLabel('celulares alta gama', { exact: true }).click();
  await page.getByRole('link', { name: 'Anuncio Patrocinado - I16' }).click();
  await context.tracing.stop({path: 'myTraceGenerated.zip'});
});