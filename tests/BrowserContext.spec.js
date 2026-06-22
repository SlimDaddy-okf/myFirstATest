import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.getByLabel('Email').fill('newtestuser4@test.com');
    await page.getByLabel('Password').fill('pwd');
    await page.getByRole('button', { name: 'Sign in' }).click();
})



test('test with BrowserContext', async () => {

    await expect(page.getByRole('link', { name: 'olegqa3' })).toBeVisible();

});