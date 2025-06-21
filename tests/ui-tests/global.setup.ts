import { test } from "../../fixtures/hooks-fixtures";
import { expect, Expect } from "@playwright/test";

test("Global Setup for Auto Login", async ({
  page,
  loginPage,
  commonUtils,
  dashboardPage,
}) => {
  const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
  console.log("Decrypted username length:", decryptedUserName.length);
  console.log("Decrypted password length:", decryptedPassword.length);

  await loginPage.gotoOrangeHRM();
  await loginPage.loginOrangeHRM(decryptedUserName, decryptedPassword);
  if (await loginPage.invalidCredentialErrorPopup.isVisible()) {
    throw new Error("Login failed: Invalid credentials or login issue");
  }
  await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`);
  await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");
  await page.context().storageState({
    path: "./playwright/.auth/auth.json",
  });
});
