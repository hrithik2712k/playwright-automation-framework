import { test, expect } from "../../fixtures/hooks-fixtures";
import pimModuleData from "../../data/ui-data/pim-module-data.json";

test(
  "[PIM] Verify that a new employee is successfully created under the PIM module.",
  { tag: ["@UAT", "@UI"] },
  async ({ gotoUrl, leftNavigationPage, pimPage }) => {
    await test.step("Open PIM Module", async () => {
      await leftNavigationPage.openPimModule();
    });

    await test.step("Add Employee in PIM module", async () => {
      await pimPage.addEmployee(
        pimModuleData.first_name,
        pimModuleData.middle_name,
        pimModuleData.last_name
      );
      await expect(pimPage.newEmployeeNameHeading).toHaveText(
        `${pimModuleData.first_name} ${pimModuleData.last_name}`
      );
    });
  }
);
