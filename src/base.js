import {createElement} from 'react';

const Base = name => {
  const Atom = ({refCb, ...others}) => {
    if (refCb) {
      others.ref = refCb;
    }
    return createElement(name, others);
  };
  return Atom;
};

export default Base;
