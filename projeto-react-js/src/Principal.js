// Importar Módulos
import React from 'react';
//import ReactDOM from 'react-dom';

// Importar o Formulário
import Formulario from './Formulario';

// Importar Tabela
import Tabela from './Tabela';

// Componente
class Principal extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            nome : '',
            idade : '',
            vetor : []
        }
    }

    // Função ao digitar (onChange)
    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value})
    } 

    // Função clique (onSubmit)
    aoClicar = (botao) => {
        botao.preventDefault()
        
        var copiarVetor = [...this.state.vetor]
        copiarVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade
        })

        this.setState({vetor : copiarVetor})
        this.setState({
            nome : '',
            idade : ''
        })
    }

    // Render
    render(){
        return (
            <div>
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar}/>
                <Tabela dados={this.state.vetor}/>
            </div>
        )
    }
}

// Exportar componente
export default Principal