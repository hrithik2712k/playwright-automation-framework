import { test, expect } from "../../fixtures/hooks-fixtures";
import loginModuleData from "../../data/ui-data/login-module-data.json";

test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});

test(
  "[login] Verify that the user cannot login with invalid password.",
  { tag: ["@UI", "@UAT"] },
  async ({ gotoUrl, loginPage, commonUtils }) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHRM(username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialErrorPopup).toHaveText(
      loginModuleData.invalid_credentials_text
    );
    await expect(loginPage.userNameInput).toBeVisible();
  }
);

test(
  "[login] Verify that the user cannot login with invalid username.",
  { tag: ["@UI", "@UAT"] },
  async ({ gotoUrl, loginPage, commonUtils }) => {
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHRM(loginModuleData.wrong_username, password);
    await expect(loginPage.invalidCredentialErrorPopup).toHaveText(
      loginModuleData.invalid_credentials_text
    );
    await expect(loginPage.userNameInput).toBeVisible();
  }
);

test(
  "[login] Verify that the user cannot login with invalid username and password",
  {
    tag: ["@UI", "@DEV"],
    annotation: {
      type: "Test Case Link",
      description:
        "Can add link to this test case from Jira, AzureDevops, Excel",
    },
  },

  async ({ gotoUrl, loginPage, commonUtils }) => {
    await loginPage.loginOrangeHRM(
      loginModuleData.wrong_username,
      loginModuleData.wrong_password
    );
    await expect(loginPage.invalidCredentialErrorPopup).toHaveText(
      loginModuleData.invalid_credentials_text
    );
    await expect(loginPage.userNameInput).toBeVisible();
  }
);

test(
  "[Login] Verify that the user cannot login with valid username and password",
  {
    tag: ["@VISUAL", "@UAT"],
    annotation: {
      type: "Test Case Link",
      description: "",
    },
  },
  async ({ gotoUrl, commonUtils, loginPage, leftNavigationPage }) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.loginOrangeHRM(username, password);
    // await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot(
    //   "OrangeHrmBrandLogo.png"
    // );
    // await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot(
    //   "LeftNavPanel.png"
    // );
  }
);
