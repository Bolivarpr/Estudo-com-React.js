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

    {/*lista renderizada */}
    const[users, setUsers] = useState([
        {id: 1, name: 'Marcelo', age: 27},
        {id: 2, name: 'Andressa', age: 26}, 
        {id: 3, name: 'Fernanda', age: 25},
        {id: 4, name: 'Larissa', age: 24},

    ]);
        
    return(
        <div>
            <p>{Name} Tem {30 + 1} anos !</p>
            
        </div>

        
    )
};

export default Soma;