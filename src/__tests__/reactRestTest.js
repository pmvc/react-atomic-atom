import { createElement } from "react";
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
 *
 * conclusion:
 * if u use react lib directly, u should use `delete`.
 * if use undefined or null, react will have warning but it will not assing to props.
 *
 * if u use reshow-build, u could use undefined,
 * because reshow-build will clean undefined.
 * reshow-build not support clean null.
 *
 */
describe("Test best react rest", () => {
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

  it("test undefined rest two times", () => {
    const o = {
      foo: "bar",
      u1: undefined,
      u2: undefined,
    };
    expect({ ...o }).to.deep.equal(o);
  });

  /**
   * Because Error (React does not recognize the `xxx` prop on a DOM element)
   * each key will only triggerr once, with test need use different key.
   */
  describe("Test undefined or null render", () => {
    let spyError;
    beforeEach(() => {
      spyError = sinon().spy(() => {});
      hideConsoleError(spyError);
    });
    afterEach(() => cleanIt());

    describe("if undefined will have error test?", () => {
      it("test with undefined", async () => {
        /**
         * Undefined could reset, but will have error message.
         */
        const Dom = base("div");
        const wrap = render(<Dom data-foo="bar" AAA1={undefined} />);
        expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
        expect(spyError.called).to.be.true;
      });

      it("test object merge with undefined", async () => {
        const o = {
          "data-foo": "bar",
          AAA2: undefined,
        };
        const Dom = base("a");
        const wrap = render(<Dom {...o} />);
        expect(wrap.html()).to.equal(`<a data-foo="bar"></a>`);
        expect(spyError.called).to.be.true;
      });

      it("test createElement with undefined", () => {
        const Dom = (props) =>
          createElement("div", { "data-foo": "bar", AAA3: undefined });
        const wrap = render(<Dom />);
        expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
        expect(spyError.called).to.be.true;
      });
    });
    describe("if null will have error test?", () => {
      it("test with null", async () => {
        /**
         * Null and Undefined could reset, but react will complain.
         */
        const Dom = base("div");
        const wrap = render(<Dom data-foo="bar" BBB1={null} />);
        expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
        expect(spyError.called).to.be.true;
      });

      it("test object merge with null", async () => {
        const o = {
          "data-foo": "bar",
          BBB2: null,
        };
        const Dom = base("a");
        const wrap = render(<Dom {...o} />);
        expect(wrap.html()).to.equal(`<a data-foo="bar"></a>`);
        expect(spyError.called).to.be.true;
      });

      it("test createElement with null", () => {
        const Dom = (props) =>
          createElement("div", { "data-foo": "bar", BBB3: null });
        const wrap = render(<Dom />);
        expect(wrap.html()).to.equal(`<div data-foo="bar"></div>`);
        expect(spyError.called).to.be.true;
      });
    });
  });
});
