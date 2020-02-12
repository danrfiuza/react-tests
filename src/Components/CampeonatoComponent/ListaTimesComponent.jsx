import React, { Component } from 'react'

export default class ListaTimesComponent extends Component {

    render () {
        console.log(this.props)
        const list = this.props.list;
    
        return (
            <table>
                <thead>
                    <tr>
                        <td>OPÇÕES</td>
                        <td>NOME</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map(time => (
                        <tr key={time.id}>
                            <td>{time.id}</td>
                            <td>{time.id}</td>
                            <td>{time.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}