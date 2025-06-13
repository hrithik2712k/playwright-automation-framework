import { Locator, Page } from "@playwright/test";

export class PimPage {
  readonly page: Page;
  readonly addPimButton: Locator;
  readonly firstNameInputBox: Locator;
  readonly middleNameInputBox: Locator;
  readonly lastNameInputBox: Locator;
  readonly saveButton: Locator;
  readonly newEmployeeNameHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addPimButton = page.getByRole("button", { name: " Add" });
    this.firstNameInputBox = page.getByRole("textbox", {
      name: "First Name",
    });
    this.middleNameInputBox = page.getByRole("textbox", {
      name: "Middle Name",
    });
    this.lastNameInputBox = page.getByRole("textbox", { name: "Last Name" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.newEmployeeNameHeading = page.locator(".orangehrm-edit-employee-name");
    }
    
    /**
     * addEmployee 
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */

  async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.addPimButton.click();
    await this.firstNameInputBox.fill(firstName);
    await this.middleNameInputBox.fill(middleName);
    await this.lastNameInputBox.fill(lastName);
    await this.saveButton.click();
  }
}
