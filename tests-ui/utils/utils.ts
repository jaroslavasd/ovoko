import { Page } from '@playwright/test';

export async function openApp( page: Page ) {
  await page.goto('https://about.ovoko.com/');
}