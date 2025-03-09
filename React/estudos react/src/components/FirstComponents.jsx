// criando componentes com funções
import TestMarcelo from "./TestMarcelo";
import { useState } from "react";

const FirstComponents = () => {
    
    {/*renderização de lista*/}
    const[users, setUsers] = useState([
        {id: 1, name: 'Marcelo', age: 27},
        {id: 2, name: 'Andressa', age: 26}, 
        {id: 3, name: 'Fernanda', age: 25},
        {id: 4, name: 'Larissa', age: 24},
    ]);

    return (
        <div>
            <div>

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