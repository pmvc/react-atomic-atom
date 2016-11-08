'use strict';

import React from 'react';

const Base = (name) => {
    const Atom = (props) => {
        let {refCb, ...others} = props;
        if (refCb) {
            others.ref = (el) => {
                refCb(el);
            };
        }
        return React.createElement(name, others);
    }
    return Atom;
}

export default Base;
