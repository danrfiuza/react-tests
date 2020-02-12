import React, { Component } from 'react'

export default class InputComponent extends Component {

    handleChange = (e) => {
        this.props.onValueChange(e.target.value);
    }

    render () {
        const value = this.props.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
            </div>
        )
    }
}