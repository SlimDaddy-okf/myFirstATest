import { test, expect } from '@playwright/test';
import fs from "fs";
import {getAuthData} from "../utils";
import {LoginPage} from "../pages/LoginPage";

test('Auth test', async ({ page }) => {
    const AuthData = getAuthData();

    await page.goto('http://demo.learnwebdriverio.com/login');

    await page.getByPlaceholder('Email').fill(AuthData.email);
    await page.getByPlaceholder('Password').fill(AuthData.password);
    await page.click("//button");

    await expect(page.locator('[href="/@newtestqa/"]')).toBeVisible();
});

//базова авторизація але з інкапсуляцією в ПОМ

test('Auth test ui', async ({ page }) => {

    const  loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login();
    await expect(page.locator('[href="/@newtestqa/"]')).toBeVisible();

});