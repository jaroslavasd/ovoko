import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://about.ovoko.com/');

  await expect(page.locator('h1[class*="title"]').first())
      .toHaveText('FIND THEMISSINGPIECE');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
