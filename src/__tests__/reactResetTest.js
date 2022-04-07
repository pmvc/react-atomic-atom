import { PureComponent } from "react";
import { expect } from "chai";
import {
  render,
  waitFor,
  hideConsoleError,
  getSinon as sinon,
  cleanIt,
} from "reshow-unit";

import base from "../base";

/**
 * undefined could get better performance compare with delete.
 * https://github.com/react-atomic/reshow/issues/117
 */

describe("Test best react rest", () => {
  afterEach(() => cleanIt());

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

  it("test object merge with undefined", async () => {
    /**
     * Object merge will not trigger error
     */
    const o = {
      "data-foo": "bar",
      AAA: undefined,
    };
    const Dom = base("div");
    const wrap = render(<Dom {...o} />);
    expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
  });

  it("test object merge replace for undefined", () => {
    const o = {
      "data-foo": "bar",
      AAA: "BBB",
    };
    expect(o.AAA).to.equal("BBB");
    const o1 = {
      ...o,
      AAA: undefined,
    };
    expect(o1.AAA).to.be.undefined;
  });
});
