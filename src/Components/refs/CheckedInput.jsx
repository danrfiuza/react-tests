import React from 'react'

import CheckInput from './CheckInput'

export default class CheckedInput extends React.Component {
    constructor (props) {
        super(props);
        this.checked = React.createRef();
    }

    componentDidMount () {
        //estou fazendo referência a um método do componente referenciado
        this.checked.current.checkInput();
        // this.checked.current.unCheckInput();
    }

    render () {
        return (
            <CheckInput ref={this.checked} />
        );
    }
}