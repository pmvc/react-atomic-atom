import React, {Component} from 'react';
export default class Th extends Component
{
    render()
    {
        return (
            <th {...this.props}>{this.props.children}</th>
        );
    }   
}
