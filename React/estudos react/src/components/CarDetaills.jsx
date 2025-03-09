const userName = ({brand, km, color, myfunction}) => {
    return (
        <div>
            <h4>detalhe do carro: </h4>
            <ul>
                <li>Marca: {brand}</li>
                <li>Kilometragem:  {km}</li>
                <li>cor:  {color}</li>
            </ul>

        </div>
        );
    };



    export default userName;