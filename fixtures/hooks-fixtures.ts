import { test as baseTest } from "./common-fixture";

type HooksFixtureType = {
  gotoUrl: any;
  logout: any;
};

export const test = baseTest.extend<HooksFixtureType>({
  gotoUrl: async ({ loginPage }, use) => {
    await loginPage.gotoOrangeHRM();
    await use();
  },

  logout: async ({ userPage }, use) => {
    await use();
    await userPage.logout();
  },
});

export { expect } from "@playwright/test";
