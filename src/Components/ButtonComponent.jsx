import React, { Component, Fragment } from 'react'

export default class ButtonComponent extends Component {
    
    handleClick = () => {
        this.props.handleClick();
    }

    render () {
        return (
            <Fragment>
                <button onClick={this.handleClick}>{this.props.text}</button>
            </Fragment>
        )
    }
}