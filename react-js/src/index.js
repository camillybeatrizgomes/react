
/* AULA 1 - Criando Render

// Importar módulos
import React from 'react'
import  ReactDOM  from 'react-dom'

// Estrutura
const estrutura = 
 <div>
    <h1>Meu primeiro Render</h1>
    <p>Testando...</p>
 </div>

// Render
ReactDOM.render(
    estrutura, 
    document.getElementById('root')
    )*/


/* AULA 2 - Criando elemento com JSX e sem o JSX

// Importar módulos
import React from "react";
import ReactDOM  from "react-dom";

// Sem JSX
//const elemento = React.createElement('h1', {}, 'Sem JSX');
//ReactDOM.render(elemento, document.getElementById('root'))

// com JSX
ReactDOM.render(<h1>Com JSX</h1>, document.getElementById('root'))
*/


/* AULA 3 - Criando Componentes

// Importar módulos
import React from "react";
import ReactDOM  from "react-dom";

// Componente
class MeuComponente extends React.Component {
    render(){
        return <h1>Meu Primeiro Componente</h1>
    }
}

// Render
ReactDOM.render(<MeuComponente/>, document.getElementById('root')) */


/* AULA 4 - Importando componentes 

// Importar módulos
import React from "react";
import  ReactDOM  from "react-dom";

// Importar componentes
import Componente01 from "./Componente01";
import Componente02 from "./Componente02";

// Componente do arquivo index.js
class Principal extends React.Component {
    render(){
        return (
            <div>
                <Componente01/>
                <Componente02/>
            </div>
        )
    }
}

// Render
ReactDOM.render(<Principal/>, document.getElementById('root')) */


/* AULA 5 - Criando Props/propriedades 

// Importar módulos
import React from "react";
import  ReactDOM  from "react-dom";

class Componente extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.informacoes.nome}</p>
                <p>{this.props.informacoes.idade}</p>
            </div>
        )
    }
}

var dados = {nome: "Camilly", idade: 20}

ReactDOM.render(<Componente informacoes={dados}/>, document.getElementById('root')) */


/* AULA 6 - Criando State 

// Importar módulos
import React from "react";
import  ReactDOM  from "react-dom";

// Componente
class Componente extends React.Component {
    constructor(props){
        super(props)

        this.state = {nome: 'Camilly'}
    }

    // Função Render
    render(){
        return <h1>{this.state.nome}</h1>
    }
}

// Render
ReactDOM.render(<Componente/>, document.getElementById('root')) */


/* AULA 7 - Criando eventos (com botão)

// Importar módulos
import React from "react";
import  ReactDOM  from "react-dom";

// Componente
class MeuComponente extends React.Component {

    // Função 
    mensagem(){
        alert('Olá mundo')
    }

    // Função Render
    render(){
        return <button onClick={this.mensagem}>Clique aqui</button>
    }
}

// Render
ReactDOM.render(<MeuComponente/>, document.getElementById('root')) */


/* AULA 8 - Inserindo parametros (Bind) 

// Importar módulos
import React from "react";
import  ReactDOM  from "react-dom";

// Componente
class MeuComponente extends React.Component {

    // Função 
    mensagem(nome){
        alert('Olá ' + nome)
        console.log(this)
    }

    // Função Render
    render(){
        return <button onClick={this.mensagem.bind(this, 'Camilly')}>Clique aqui</button>
    }
}

// Render
ReactDOM.render(<MeuComponente/>, document.getElementById('root')) */


