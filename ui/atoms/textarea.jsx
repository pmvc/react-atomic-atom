import React, {Component} from 'react'; 
export default class Textarea extends Component
{
    render()
    {
        return (
            <textarea {...this.props}>{this.props.children}</textarea>
        );
    }
}
