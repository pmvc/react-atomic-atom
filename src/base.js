import { createElement } from "react";

const Base = (name) => {
  const Atom = (props) => {
    const { refCb: ref, ...otherProps } = props;
    const myProps = props.hasOwnProperty("refCb")
      ? { ...otherProps, ref }
      : props;
    return createElement(name, myProps);
  };
  Atom.displayName = `ATOM (${name})`;
  return Atom;
};

export default Base;
