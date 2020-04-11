// @ts-ignore
import * as wd from "wd";
import { strictEqual } from "assert";
import config from "../config";
const url = "https://e2e-boilerplate.github.io/sandbox/";

describe("Sandbox", () => {
  let browser: any;

  beforeEach(function fn() {
    browser = wd.promiseChainRemote();
    return config(url, browser);
  });

  afterEach(() => {
    return browser.quit();
  });

  it("should be on Sandbox", async () => {
    const title = await browser.title();
    strictEqual(title, "Sandbox");
  });

  it("should have a page header", async () => {
    const header = await browser.elementByTagName("h1").text();
    strictEqual(header, "Sandbox");
  });
});
