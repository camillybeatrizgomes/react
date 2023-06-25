
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


/* AULA 9 - Arrow Function 

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

    arrowFunction = (curso) => {
        alert('Estou fazendo o curso de ' + curso)
        console.log(this)
    }

    // Função Render
    render(){
        return (
            <div>
        <button onClick={this.mensagem.bind(this, 'Camilly')}>Clique aqui</button>
        <button onClick={() => this.arrowFunction('ReactJS')}> Arrow Function</button>
        </div>
        )
    }
}

// Render
ReactDOM.render(<MeuComponente/>, document.getElementById('root')) */


/* AULA 10 - Evento onChange 

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

    arrowFunction = (curso) => {
        alert('Estou fazendo o curso de ' + curso)
        console.log(this)
    }

    teclado = (obj) => {
        console.log(obj.target.value)
    }

    // Função Render
    render(){
        return (
            <div>
        <button onClick={this.mensagem.bind(this, 'Camilly')}>Clique aqui</button>
        <button onClick={() => this.arrowFunction('ReactJS')}> Arrow Function</button>
        <hr/>
        <input type="text" onChange={this.teclado}/>
        </div>
        )
    }
}

// Render
ReactDOM.render(<MeuComponente/>, document.getElementById('root')) */


/* AULA 11 - Exercícios 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

// Componente
class MeuComponente extends React.Component {
    // Contrutor
    constructor(props){
        super(props)

        this.state = {texto: this.props.textoInicial}
    }

    // Função
    minhaFuncao = (elemento) => {
        this.setState({texto: elemento.target.value})
    }

    // Função Render
    render(){
        return(
            <div>
                <h1>{this.state.texto}</h1>
                <input type='text' onChange={this.minhaFuncao} value={this.state.texto}/>
            </div>
        )
    }
}

// Render
ReactDOM.render(<MeuComponente textoInicial="Digite algo..."/>, document.getElementById('root')) */


/* AULA 12 -  Condicionais (If/Else) 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component {
    // Construtor
    constructor(props){
        super(props)

        this.state = {exibir : false}
    }

    // Função 
    alterarState = () => {
        let converter = !this.state.exibir
        this.setState({exibir : converter})
    }

    // Render
    render(){
        // Condicional 
        let meuTexto = '';
        if(this.state.exibir === true){
            meuTexto = <h1>Olá!!! Utilizando Condicionais</h1>
        } else {
            meuTexto = '';
        }

        return (
            <div>
                {meuTexto}
                <button onClick={this.alterarState}>Clique aqui</button>
            </div>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root')) */


/* AULA 13 - Listas e Chaves 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

// Componente
class Componente extends React.Component {

    render(){
        // Vetor
        let cores = ['Azul','Amarelo','Vermelho','Verde']
        // Função Listar
        let listar = cores.map((cor, index) => {
            return <li key={index}>{index} - {cor}</li>
            // Chave key
        });

        return(
            <ul>
                {listar}
            </ul>
        )
    }

}
// Render
ReactDOM.render(<Componente/>, document.getElementById('root')) */


/* AULA 14 - CSS 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'
// Importando CSS
import './estilos.css'

// Componente
class Componente extends React.Component {

    render(){

        const estilo = {
            color: 'blue',
            borderBottom: 'solid 5px green'
        }
        return(
            <div>
                <h1 style={{color:'red', backgroundColor:'yellow'}}>CSS interno</h1>
                <h1 style={estilo}>CSS através de variáveis e constantes</h1>
            </div>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root')) */


/* AULA 14 - Utilizando className 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'
// Importando CSS
import './estilos.css'

// Componente
class Componente extends React.Component {

    render(){

        const estilo = {
            color: 'blue',
            borderBottom: 'solid 5px green'
        }
        return(
            <div>
                <h1 style={{color:'red', backgroundColor:'yellow'}}>CSS interno</h1>
                <h1 style={estilo}>CSS através de variáveis e constantes</h1>
                <h1 className='minhaClasse'>CSS através de classes</h1>
            </div>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root')) */


/* AULA 15 - Ciclo de vida (Lifecycle) 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component {
    // Construtor 
    constructor(props){
        super(props)

        this.state = {cor : 'Vermelho'}
    }

    // Depois de realizar o render
    componentDidMount(){
        setTimeout(() => {
            this.setState({cor : 'Azul'})
        }, 2000)
    }

    render(){
        return <h1>Minha cor preferida é {this.state.cor}</h1>
    }
    
}

ReactDOM.render(<Componente/>, document.getElementById('root')) */


/* AULA 16 - Evento onSubmit 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component {

    minhaFuncao = () => {
        alert('Testando evento onSubmit')
    }

    render(){
        return (
            <form onSubmit={this.minhaFuncao}>
                <input type='submit'/>
            </form>
        )
    }

}

ReactDOM.render(<Componente/>, document.getElementById('root')); */


/* AULA 17 - Função preventDefault() 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component {

    minhaFuncao = (elemento) => {
        elemento.preventDefault()
        alert('Testando evento onSubmit')
    }

    render(){
        return (
            <form onSubmit={this.minhaFuncao} action='http://www.youtube.com'>
                <input type='submit'/>
            </form>
        )
    }

}

ReactDOM.render(<Componente/>, document.getElementById('root')); */


/*AULA 18 - Manipulando elementos de formulário 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            nome : '',
            idade : null
        }
    }

    // Função
    funcaoNome = (campo) => {
        this.setState({nome : campo.target.value})
    }

    funcaoIdade = (campo) => {
        this.setState({idade : campo.target.value})
    }

    render(){
        return (
            <form>
                <input type='text' placeholder='Nome'
                onChange={this.funcaoNome}/>
                <input type='number' placeholder='Idade'
                onChange={this.funcaoIdade}/>

                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>
            </form>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root')) */


/*AULA 18 - Manipulando elementos de formulário (Parte 2) 

// Importar Módulos
import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            nome : '',
            idade : null
        }
    }

    // Função
    enviarParaState = (campo) => {
        this.setState({[campo.target.name] : campo.target.value})
    }


    render(){
        return (
            <form>
                <input type='text' placeholder='Nome' name='nome'
                onChange={this.enviarParaState}/>
                <input type='number' placeholder='Idade' name='idade'
                onChange={this.enviarParaState}/>

                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>
            </form>
        )
    }
}

ReactDOM.render(<Componente/>, document.getElementById('root')) */