// criando componentes com funções
import TestMarcelo from "./TestMarcelo";
import { useState } from "react";

const FirstComponents = () => {
    
    {/*useState*/}
    const[otherData, setOtherData] = useState('Marcelo');
    
    {/*renderização de lista*/}
    const[users, setUsers] = useState([
        {id: 1, name: 'Marcelo', age: 27},
        {id: 2, name: 'Andressa', age: 26}, 
        {id: 3, name: 'Fernanda', age: 25},
        {id: 4, name: 'Larissa', age: 24},
    ]);

    {/*renderização condicional*/}
    const x = true;

const name = 'Marcelo';


    return (
        <div>
            <h2>First Component</h2>
            <div>
            
            {/*renderização condicional*/}
            {name === 'Gabe' ?(
                <div>
                    <p>olá Marcelo</p>
                </div>
            ) : (
                <div>
                    <p>nome não encontrado</p>
                </div>
            )}

            <div>
                    <h3>isso sera exibido?</h3>
                    {x && <p>eu sou colorado</p>}
                </div>

               <div>

                {/*useState*/}
                <p>Valor: {otherData}</p>
                <button onClick= {()=> setOtherData('Fernanda')}>Mudar State</button>
               </div>

                {/*propriedade key*/}
                <div>
                    <ul>
                        {users.map((user) =>(
                            <li key = {user.id}>{user.name} - {user.age} anos</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FirstComponents;