import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

import './App.css';


{/*arquivos em components*/}
import FirstComponents from './components/FirstComponents';
import TestMarcelo from './components/TestMarcelo';

{/*Destruturando props*/}
import CarDetaills from './components/CarDetaills'; 

function App() {

{/* renderizar usando API json no react*/}
const [products, setProducts] = useState([]);

useEffect(() => {
  async function getData() {
    const res = await fetch(url);

    const data = await res.json();

  setProducts(data)
  }
  getData();
}, []);

  return (
    
      <div>
        
        {/*<TestMarcelo /> está chamando o arquivo TestMarcelo.jsx que está dentro da pasta components,
        */}

        
        <h1>Fundamentos do React</h1>
        {/*arquivos em components*/}
        <FirstComponents />
        <TestMarcelo />
        <CarDetaills />
        <h1 style={{color: "red"}}>HTTP com REACT</h1>
        
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R${product.price}</li>
          ))}
        </ul>

      </div>
      
  )
};

export default App;