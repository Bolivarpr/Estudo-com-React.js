import './App.css';
{/*arquivos em components*/}
import FirstComponents from './components/FirstComponents';
import TestMarcelo from './components/TestMarcelo';

{/*imagem em assets*/}
import img from './assets/Fernandao.png';

{/*Destruturando props*/}
import CarDetaills from './components/CarDetaills';

// renderização de listas com componentes
const cars = [
  {id: 1, brand: 'veloster', km: 10000, color: 'vermelho'},
  {id: 2, brand: 'ferrari', km: 120000, color: 'preto'},
  {id: 3, brand: 'tesla', km: 2000, color: 'branco'},
];


function App() {

  function showMessage() {
    alert('funcionou!');
  };

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
        {/*reaproveitando componentes*/}
        <CarDetaills brand='BWM' km='120000' color='preto' />
        <CarDetaills brand='PORSHE' km='2000' color='branco' />
        {/*renderização de listas com componentes*/}
        {cars.map((car) => (
          <CarDetaills key={car.id} brand={car.brand} km={car.km} color={car.color} />
        ))}
        
      </div>
      
  )
};

export default App;