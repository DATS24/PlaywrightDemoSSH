import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Open Wikimon', async () => {
    await page.goto('https://wikimon.net/');
    await page.getByRole('searchbox', { name: 'Search' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('tyrannomon');
    await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  })
});