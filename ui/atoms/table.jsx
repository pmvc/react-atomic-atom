import React, {Component} from 'react';
export default class Table extends Component
{
    render()
    {
        return (
            <table {...this.props}>{this.props.children}</table>
        );
    }   
}
