import { createElement } from "react";

const Base = (name, create = createElement) => {
  const Atom = (props) => {
    if (props.refCb) {
      const nextProps = { ...props, ref: props.refCb };
      delete nextProps.refCb;
      return create(name, nextProps);
    } else {
      return create(name, props);
    }
  };
  Atom.displayName = `ATOM (${name})`;
  return Atom;
};

export default Base;
