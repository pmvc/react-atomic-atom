import { expect } from "chai";
import { render, waitFor } from "reshow-unit";

import base from "../base";

describe("Test base", () => {
  it("basic test", () => {
    const Dom = base("div");
    expect(Dom.displayName).to.equal("ATOM (div)");
  });

  it("test render", () => {
    const Dom = base("div");
    const wrap = render(<Dom />);
    expect(wrap.html()).to.equal("<div></div>");
  });

  it("test refcb", async () => {
    let uFake;
    const Dom = base("div");
    render(<Dom refCb={(el) => (uFake = el)} />);
    await waitFor(() => expect(uFake.nodeName).to.equal("DIV"));
  });

  it("test custom create", async () => {
    let uFake;
    const Dom = base("div", () => null);
    const wrap = render(<Dom />);
    expect(wrap.html()).to.equal("");
  });
});
