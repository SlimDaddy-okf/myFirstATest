import { test } from '@playwright/test';

test('RegisterForm', async ({ page }) => {
    const registerBtn = page.locator('[id="login-register-button"]');
    const firstNameField = page.locator('[id="register-first-name"]');
    const lastNameField = page.locator('[id="register-last-name"]');
    const emailField = page.locator('[id="register-email"]');
    const passField = page.locator('[id="register-password"]');
    const cityField = page.locator('[id="register-city"]');
    const countryDropdown = page.locator('[id="register-country"]');
    const phoneField = page.locator('[id="register-phone"]');
    const streetField = page.locator('[id="register-street"]');
    const zipCodeField = page.locator('[id="register-zip"]');
    const submitRegisrtation = page.locator('[id="register-button"]');


    await page.goto('https://aqa-app.vercel.app/login');
    await registerBtn.waitFor();
    await registerBtn.click();
    await firstNameField.waitFor();
    await firstNameField.fill('Tom');
    await lastNameField.waitFor();
    await lastNameField.fill('Hardy');
    await emailField.waitFor();
    await emailField.fill('testemail@test.com');
    await passField.waitFor();
    await passField.fill('Test123456');
    await cityField.waitFor();
    await cityField.fill('Kyiv');
    await countryDropdown.waitFor();
    await countryDropdown.selectOption('Ukraine');
    await phoneField.waitFor();
    await phoneField.fill('+380671234567');
    await streetField.waitFor();
    await streetField.fill('Urlivska');
    await zipCodeField.waitFor();
    await zipCodeField.fill('02081');
    await submitRegisrtation.waitFor();
    await submitRegisrtation.click();


});