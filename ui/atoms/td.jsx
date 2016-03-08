import React, {Component} from 'react';
export default class Td extends Component
{
    render()
    {
        return (
            <td {...this.props}>{this.props.children}</td>
        );
    }   
}
