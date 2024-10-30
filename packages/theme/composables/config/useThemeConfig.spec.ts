import {useThemeConfig} from "./useThemeConfig";

describe("useThemeConfig", () => {
  it("should return the correct api config", () => {
    const ref: any = {
      apiRedirectUrl: "https://api-docs.tsed.io",
      apiUrl: "https://tsed.io/api.json",
      "githubProxyUrl": "https://api.tsed.io/rest/github/tsedio/tsed",
      "repo": "tsedio/tsed",
      value: undefined
    };
    ref.value = ref;

    expect(useThemeConfig()).toEqual(ref);
  });
});