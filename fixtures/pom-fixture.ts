import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { UserPage } from "../Pages/UserPage";
import { LeftNavigationPage } from "../Pages/LeftNavigationPage";
import { PimPage } from "../Pages/PimPage";

type PomFixturesType = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  userPage: UserPage;
  leftNavigationPage: LeftNavigationPage;
  pimPage: PimPage;
};

export const test = baseTest.extend<PomFixturesType>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  userPage: async ({ page }, use) => {
    await use(new UserPage(page));
  },
  leftNavigationPage: async ({ page }, use) => {
    await use(new LeftNavigationPage(page));
  },
  pimPage: async ({ page }, use) => {
    await use(new PimPage(page));
  },
});
