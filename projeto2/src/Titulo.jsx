import { useState } from "react";
//function Titulo({nome, paragrafo, cor}){
function Titulo({cor}){
    const [texto, setTexto] = useState("Um título no estado inicial")
    const [inputText, setInput] = useState("")

    function clicou(){
        setTexto(inputText)
    }

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <input value={inputText} onChange={(e)=> {setInput(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudei</button>
        </div>
        //<button onClick={()=>{setTexto("Mudei o texto")}}>Mudar</button>
        /*<div>
            <h1 style={{color: cor}}>Olá, eu sou {nome ? nome : "Fulano"}</h1>
            {paragrafo ? 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic enim vero possimus reprehenderit, aperiam voluptatum perferendis, eveniet dignissimos quas porro necessitatibus incidunt dolorem illum eaque adipisci quo mollitia animi!</p> : 
            <p>Nada</p> }
        </div>*/
    )
    /*var nome = "Camilly Beatriz";
    const soma = 10 + 10;
    const url = "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png";
    return (
        <div>
            <h1>Olá, eu sou {nome} e tenho {soma} anos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa cumque eius ad, blanditiis fugit cum rerum aspernatur omnis ea quas fuga sint iusto sit facilis ab vero eos odio!</p>
            <img width={200} src={url} />
        </div>
    )*/
    //return <h1>Título 1</h1>
}
export default Titulo;