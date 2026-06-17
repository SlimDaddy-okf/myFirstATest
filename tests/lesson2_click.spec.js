import { test, expect } from '@playwright/test';
import fs from "fs";

test('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click');
    await page.locator("#badButton").click();
    await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
});


test('checkBox and radio', async ({ page }) => {
    await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
    await page.locator('[for=radio-1]').click();      //Select a Location
    await page.locator('[for=checkbox-4]').click();   //Hotel Ratings
    await page.locator('[for=checkbox-nested-3]').click();    //Bed Type
    await page.locator('[for=checkbox-nested-4]').click();  //Bed Type

    await expect(page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
    await expect(page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
    await expect(page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
    await expect(page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);

    await expect(page.locator("[for=radio-1]")).toHaveCSS('background-color', 'rgb(0, 127, 255)');
    await expect(page.locator("[for=checkbox-4]")).toHaveCSS('background-color', 'rgb(0, 127, 255)');
    await expect(page.locator("[for=checkbox-nested-3]")).toHaveCSS('background-color', 'rgb(0, 127, 255)');
    await expect(page.locator("[for=checkbox-nested-4]")).toHaveCSS('background-color', 'rgb(0, 127, 255)');


});


test ('login', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/sampleapp');

    const login = "New test"
    const password = "pwd"

    //await page.pause();
    await page.locator('[name="UserName"]').fill(login);
    //await page.getByRole('textbox', { name: 'User Name' }).fill(login);
    await page.locator('input[name="Password"]').fill(password);
    await page.locator('[id="login"]').click();

    await expect(page.locator("#loginstatus")).toHaveText(`Welcome, ${login}!`);
    await expect(page.locator("#loginstatus")).toHaveCSS('color', 'rgb(40, 167, 69)');
});


test ('lesson2_checkbox', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/checkboxes');

    const form = page.locator("#checkboxes input")
    const cb1 = form.nth(0);
    const cb2 = form.nth(1);

    await cb1.check();
    await cb2.uncheck();

    await expect(cb1).toBeChecked()
    await expect(cb2).not.toBeChecked()
});


test ('lesson2_screenshot', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/sampleapp');

    await page.locator("body").screenshot({path: 'screenshots/body.png' });
    await page.locator("section").screenshot({path: 'screenshots/container.png' });

    expect(fs.existsSync("screenshots/body.png")).toBe(true);
    expect(fs.existsSync("screenshots/container.png")).toBe(true);
})