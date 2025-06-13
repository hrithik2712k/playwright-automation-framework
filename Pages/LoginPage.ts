import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly invalidCredentialErrorPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.invalidCredentialErrorPopup = page.getByText("Invalid credentials");
  }

  /**To open URL into browser */

  async gotoOrangeHRM() {
    await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
  }

  /**
   * @param userName
   * @param password
   * To login into ORangeHRM Application
   */

  async loginOrangeHRM(userName: string, password: string) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
