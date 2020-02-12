import React, { Component } from 'react'

export default class TextComponent extends Component {

    render () {
        const value = this.props.value;
        return (
            <div>
                <p>{value}</p>
            </div>
        )
    }
}