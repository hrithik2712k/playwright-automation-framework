import { expect } from "@playwright/test";
import { test } from "../fixtures/hooks-fixtures.ts";

// test.beforeEach("Before Each Hook", async ({ loginPage }) => {
//   await loginPage.gotoOrangeHRM();
// });

// test.afterEach("After Each Hook", async ({ userPage }) => {
//   await userPage.logout();
// });

test("Temp test 1", async ({ page, gotoUrl }) => {
  console.log(await page.title());
});

test("Temp test 2", async ({ page, gotoUrl }) => {
  await expect(page).toHaveTitle("OrangeHRM");
});

test("Temp test 3", async ({ page, gotoUrl, logout }) => {
  await expect(page).toHaveTitle("OrangeHRM");
});
