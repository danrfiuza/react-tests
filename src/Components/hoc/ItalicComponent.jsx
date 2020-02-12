import React, { Fragment } from 'react'

const ItalicComponent = (WrappedComponent) => {
    const style = {
        
    }
    return (props) => {
        return (
            <div className="inhreit">
                <WrappedComponent style={style} {...props}/>
            </div>
        )

    }
}
export default ItalicComponent