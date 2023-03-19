import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

/*import Titulo from "./Titulo";

function App(){
return (
  <div>
    <Titulo cor="red"/>
    <Titulo cor="blue"/>
    <Titulo cor="green"/>
  </div>
  
  <div>
    <Titulo cor="red" nome="Camilly" paragrafo={true}/>
    <Titulo cor="blue"/>
    <Titulo cor="yellow"/>
  </div>
)

  //return <Titulo/>   -> retornar o texto dentro da função no arquivo Titulo
  // return <h1>Olá Mundo!</h1>
}

export default App;*/