import { createElement } from "react";

const Base = name => {
  const Atom = props => {
    if (props.refCb) {
      props.ref = props.refCb;
      delete props.refCb;
    }
    return createElement(name, props);
  };
  Atom.displayName = `ATOM (${name})`;
  return Atom;
};

export default Base;
