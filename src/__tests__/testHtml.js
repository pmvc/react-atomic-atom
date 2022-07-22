import { expect } from "chai";

import {html} from "../index";

describe("Test base", () => {
  it("basic test", ()=>{
    expect(html.default).to.equal("div");
  });
});
