import { PureComponent } from "react";
import { expect } from "chai";
import {
  render,
  waitFor,
  hideConsoleError,
  getSinon as sinon,
} from "reshow-unit";

import base from "../base";

describe("Test base", () => {
  it("test with null", () => {
    const Dom = base("div");
    const wrap = render(<Dom data-foo="bar" data-bar={null} />);
    expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
  });

  it("test with undefined", async () => {
    /**
     * Undefined could reset, but will have error message.
     */
    const Dom = base("div");
    const spy = sinon().spy(() => {});
    hideConsoleError(spy);
    const wrap = render(<Dom data-foo="bar" AAA={undefined} />);
    expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
    expect(spy.called).to.be.true;
  });
});
