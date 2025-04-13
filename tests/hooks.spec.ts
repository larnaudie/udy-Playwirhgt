import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before all');
});

test.afterAll(async () => {
    console.log('After all');
});

test("Test 1", async ({ page }) => {
    console.log('Test 1 block');
});

test("Test 2", async ({ page }) => {
    console.log('Test 2 block');
});

test("Test 3", async ({ page }) => {
    console.log('Test 3 block');
});


test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    console.log('Before each');
});

test.afterEach(async ({ page }) => {
    console.log('After each');
});

