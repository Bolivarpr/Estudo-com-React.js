import './App.css';
{/*arquivos em components*/}
import FirstComponents from './components/FirstComponents';
import TestMarcelo from './components/TestMarcelo';

{/*imagem em assets*/}
import img from './assets/Fernandao.png';

{/*Destruturando props*/}
import CarDetaills from './components/CarDetaills';

{/*props*/}


function App() {

  return (
    
      <div>
        {/*<TestMarcelo /> está chamando o arquivo TestMarcelo.jsx que está dentro da pasta components,
        */}

        <h1>Fundamentos do React</h1>
        {/*arquivos em components*/}
        <FirstComponents />
        <TestMarcelo />
        {/*imagem em assets*/}
        <img src={img} alt="" />
        {/*Destruturando props*/}
        <CarDetaills brand='Fiat' km='10000' color='vermelho' />
      </div>
      
  )
};

export default App;