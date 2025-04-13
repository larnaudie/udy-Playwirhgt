import { test, expect } from '@playwright/test';

test.describe('My First Group', () => {


    test.beforeAll(async () => {
        console.log('Connecting database');
    });
    
    test.beforeEach(async () => {
        console.log('Clearing Cookies');
    });
    
    test.afterEach(async ({  }) => {
        console.log('cache removal');
    });
    
    test.afterAll(async ({  }) => {
        console.log('database disconnect');
    });
    
    test("Test 1", async ({ }) => {
        console.log('Test 1 block');
    });
    
    test("Test 2", async ({ }) => {
        console.log('Test 2 block');
    });
})


test("Test 3", async ({ }) => {
    console.log('Test 3 block');
});

test("Test 4", async ({ }) => {
    console.log('Test 4 block');
});



