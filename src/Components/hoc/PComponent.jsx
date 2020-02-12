import React, { Fragment } from 'react'

import ItalicComponent from './ItalicComponent'

const PComponent = (props) => (
    <Fragment>
        <p>{props.text}</p>
    </Fragment>
)

export default ItalicComponent(PComponent)