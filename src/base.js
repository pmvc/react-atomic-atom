import { createElement } from "react";

const Base = name => {
  const Atom = props => {
    const { refCb, ...otherProps } = props;
    const myProps = refCb ? { ...otherProps, ref: refCb } : props;
    delete myProps.refCb;
    return createElement(name, myProps);
  };
  Atom.displayName = `ATOM (${name})`;
  return Atom;
};

export default Base;
