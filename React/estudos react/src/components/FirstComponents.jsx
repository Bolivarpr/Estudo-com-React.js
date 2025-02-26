// criando componentes com funções
import TestMarcelo from "./TestMarcelo";
import { useState } from "react";

const FirstComponents = () => {
    
    const[otherData, setOtherData] = useState('Marcelo');

   
    const [list] = useState(['React', 'Javascript', 'Node.js', 'Power Bi', 'Css']);
    

    return (
        <div>
            <h2>First Component</h2>
            <div>

               <div>
                <p>Valor: {otherData}</p>
                <button onClick= {()=> setOtherData('Fernanda')}>Mudar State</button>
               </div>

                <div>
                    <ul>
                        {list.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FirstComponents;