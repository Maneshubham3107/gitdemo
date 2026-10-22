import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.shoughl.com/en/for-employers');
  
});