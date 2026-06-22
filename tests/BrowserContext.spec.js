import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.getByRole('textbox', { name: 'Email' }).fill('newtestuser4@test.com');
    await page.getByRole('textbox',{ name: 'password' }).fill('pwd');
    await page.getByRole('button', { name: 'Sign in' }).click();
})



test('test with BrowserContext', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'olegqa3' })).toBeVisible();
});

test('Verify browser context', async ({ page}) => {
    await expect(page.getByRole('link', { name: 'olegqa3' })).toBeVisible();
})