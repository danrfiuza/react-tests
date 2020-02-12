import React from 'react'

export default class CheckInput extends React.Component {
    constructor (props) {
        super(props);
        // Cria uma ref para armazenar o elemento textInput do DOM
        this.checked = React.createRef();
    }

    checkInput = () => {
        // acessando o campo "current" para obter um nó do DOM.
        this.checked.current.defaultChecked = true;
    }

    unCheckInput = () => {
        // acessando o campo "current" para obter um nó do DOM.
        this.checked.current.defaultChecked = false;
    }

    render () {
        // Diz ao React que nós queremos associar o atributo ref do <input>
        // com o `textInput` que nós criamos no construtor.
        return (
            <div>
                <input
                    type="checkbox"
                    ref={this.checked}
                />
            </div>
        );
    }
}