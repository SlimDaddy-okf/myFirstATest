import { test, expect } from '@playwright/test';

// test('My new test', () => {
//     console.log("Hello, my new test")
// });

// Альтернативний варіант 'My new test'
function writeText() {
    console.log("Hello, my new test");
}

test('My new test',writeText)



test('Singup', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.getByRole('link', { name: ' Sign up' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('OlegQA3');
    await page.getByRole('textbox', { name: 'Email' }).fill('newtestuser4@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('pwd');
    await page.getByRole('button', { name: 'Sign up' }).click();
    //await page.pause()

    await expect(page.getByRole('link', { name: 'olegqa3' })).toBeVisible();

});