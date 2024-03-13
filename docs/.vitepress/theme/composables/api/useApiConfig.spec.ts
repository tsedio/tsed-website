import {useApiConfig} from "./useApiConfig.js";

describe("useApiConfig", () => {
  it("should return the correct api config", () => {
    const ref: any = {
      apiRedirectUrl: "https://api-docs.tsed.io",
      apiUrl: "https://tsed.io/api.json",
      value: undefined
    };
    ref.value = ref;

    expect(useApiConfig()).toEqual(ref);
  });
});