import { createElement } from "react";

const Base = name => {
  const Atom = props => {
    const myProps = props.refCb ? { ...props, refCb: undefined, ref: props.refCb } : props;
    return createElement(name, myProps);
  };
  Atom.displayName = `ATOM (${name})`;
  return Atom;
};

export default Base;
