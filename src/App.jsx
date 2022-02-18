import './App.css';
// import Primeiro from './components/Primeiro'
// import Segundo from './components/Segundo'
// import QualquerNome, { Component1, Component2 } from './components/Multi'
// import Estilos from './components/Estilos/Estilos.css'

//import { Component1 } from './components/Multi'
//Esse import só retornará o componente 01, definido no arq Multi. Para isso, deve-se comentar a chamada dentro da div das demais que não serão utilizadas, chamando apenas a tag <Component1 />

import Estilos from './components/Estilos/Estilos';
import MinMax from './components/MinMax'
import TesteBotao from './components/testebotao/botao'
import Titulo from './components/titulo'
import Botao from './components/Botao'


function App() {
  return (
    <div>
    {/* <Primeiro />
    <Segundo />
    <QualquerNome /> */}
    {/* <Component1 />
    <Component2 /> */}
    <Estilos />
    <MinMax min="2" max="10" />
    <MinMax min={10} max={20} />
    <TesteBotao label="Comprar" backColor = "red"/>
    <TesteBotao label="Adicionar ao carrinho" backColor = "green" />
    <TesteBotao label="Finalizar compra"  backColor = "blue" />
    <Titulo principal="olá" secundario = "tudo bem" />
    <Botao />

    </div>
  );
}

export default App;
