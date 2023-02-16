// @ts-check

/**
 * @typedef {object} ATOM
 * @property {object} atoms
 * @property {string} default
 */

const html = {
  atoms: {
    input: {
      renderChildren: false,
    },
    img: {
      renderChildren: false,
    },
    path: {
      renderChildren: false,
      ui: false,
    },
  },
  default: "div",
};
export { html };
