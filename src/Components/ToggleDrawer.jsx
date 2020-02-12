import React from 'react'

export const ToggleDrawer = (props) => {
    const open = props.open;

    const drawer = open ?
        (
            <div>
                <ul>
                    {[1, 2, 3, 4, 5].map(num => (
                        <li key={num}>{num}</li>
                    ))}
                </ul>
            </div>
        ) :
        (
            <div>Nothing to show here!</div>
        )

    return (

        <div>{drawer}</div>
    )
}