import { test } from "../fixtures/common-fixture";
import { expect, Expect } from "@playwright/test";

test("Global Setup for Auto Login", async ({
  page,
  loginPage,
  commonUtils,
  dashboardPage,
}) => {
  const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

  await loginPage.gotoOrangeHRM();
  await loginPage.loginOrangeHRM(decryptedUserName, decryptedPassword);
  await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`);
  await expect(dashboardPage.dashboardTitleText).toHaveText("Dashboard");
  await page.context().storageState({
    path: "./playwright/.auth/auth.json",
  });
});
