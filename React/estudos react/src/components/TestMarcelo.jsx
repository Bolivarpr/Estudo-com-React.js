import "../TestMarcelo.css";
import {useState} from 'react';


const Soma =() =>{
    const Name = 'Marcelo';
    const Name2= 'Andressa';

    const dado = {
        age:27,
        city:'Porto Alegre',
        job: 'programadora',
    };

    const handClick = () => {
        alert('como é amigo')
    };

    {/*faz uma verificação se é uma coisa ou outra*/}
    const time = (x) => {
        if(x) {
            return <p>está muito quente! </p>;
        } else {
            return <p>Hoje está frio! </p>;}
    }
    
    {/*useState*/}
    const [somaNum, setsomaNum] = useState('Internacional');

    {/*lista renderizada */}
    const[users, setUsers] = useState([
        {id: 1, name: 'Marcelo', age: 27},
        {id: 2, name: 'Andressa', age: 26}, 
        {id: 3, name: 'Fernanda', age: 25},
        {id: 4, name: 'Larissa', age: 24},

    ]);
        
    const n = 12;
    return(
        <div>

            <p>do arquivo TestMarcelo - amigo</p>
            <p>{Name} Tem {30 + 1} anos !</p>

            <div>
                <button onClick={handClick}>React</button>
            </div>
            
            {time(false)}

            <div>
                <p>Time de Futebol: {somaNum}</p>
                <button onClick={() => setsomaNum('Palmeiras')}>Mudar Time</button>
                
            </div>
            
            {/*mudar cor usando comparação*/}
            <p style={{color:"red"}}>inline style</p>
            <p style={n > 10 ? {color: "purple"} : {color: "mageta"}}>css dinamico</p>

            <p style={n > 20 ? {color: "red"} : {color: "mageta"}}>css dinamico 2</p>
        </div>

        
    )
};

export default Soma;