import { test, expect } from "@playwright/test";

test("Test 1 @smoke", async () => {
  console.log("Test 1 block");
});

test("Test 2 @sanity", async () => {
  console.log("Test 2 block");
});

test("Test 3 @regression", async () => {
  console.log("Test 3 block");
});

test("Test 4 @regression", async () => {
  console.log("Test 4 block");
});
