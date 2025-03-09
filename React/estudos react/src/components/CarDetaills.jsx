import { useState } from "react";
import "../CarDetaills.css"

const userName = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

/* @param {Event} e - Evento de submissão do formulário.
 */
const handleSubmit = async (e) => {
    e.preventDefault();

     // Garante que o preço seja um número. O valor de `price` é convertido de string para número.
     const product = {
        name,                // Nome do produto vindo do estado `name`
        price: Number(price) // Converte o valor de `price` (string) para número
    };

     // URL do backend onde os produtos serão enviados via requisição HTTP
     const url = "http://localhost:3000/products";

        // Realiza uma requisição POST para enviar os dados do produto para o backend
        const res = await fetch(url, {
            method: "POST", // Define o método HTTP como POST (criação de recurso)
            headers: {
                "Content-Type": "application/json", // Define o tipo de conteúdo da requisição como JSON
            },
            // O corpo da requisição contém os dados do produto em formato JSON
            body: JSON.stringify(product),
        });

        // Exibe os dados do produto enviados no console para depuração
        console.log("Produto enviado:", product);
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="add-product">
                    <label>
                        <span>Nome:</span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        <span>Preço:</span>
                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </label>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
        );
    };



    export default userName;