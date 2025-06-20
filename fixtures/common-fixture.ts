import { test as baseTest } from "./pom-fixture";
import CommonUtils from "../utils/CommonUtils";
import CommonApiUtils from "../utils/CommonApiUtils";

type CommonFixturesType = {
  commonUtils: CommonUtils;
  commonApiUtils: CommonApiUtils;
};

export const test = baseTest.extend<CommonFixturesType>({
  commonUtils: async ({}, use) => {
    await use(new CommonUtils());
  },

  commonApiUtils: async ({ request }, use) => {
    await use(new CommonApiUtils(request));
  },
});
