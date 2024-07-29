import { test, expect } from '@playwright/test';
import { openApp } from './utils/utils';

test('has title', async ({ page }) => {
  await openApp(page)

  const title = page.locator('h1[class*="title"]').first()

  await expect(title).toHaveText('FIND THEMISSINGPIECE1');
});

test('top navigation links are present', async ({ page }) => {
  await openApp(page)

  const topLinks = (await page.locator('nav[class*="menu"][class*="horizontal"] .menu-item').all())

  expect(topLinks.length).toBe(5);
});

test('marketplace opens', async ({ page, context }) => {
  await openApp(page)

  const marketPlaceLink = page.getByRole('link', { name: 'MARKETPLACE' })

  const pagePromise = context.waitForEvent('page')
  await marketPlaceLink.click()
  const newPage = await pagePromise

  expect(newPage.url()).toContain('https://rrr.lt/')
});

test('contacts opens', async ({ page }) => {
  await openApp(page)

  const contactsLink = page.getByRole('link', { name: 'CONTACTS' })

  await contactsLink.click()

  expect(page.url()).toContain('/contacts')

  await expect(page.getByText('Contact US', { exact: true })).toBeVisible()
});


