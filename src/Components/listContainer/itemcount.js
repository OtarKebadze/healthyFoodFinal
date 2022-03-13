import {useState} from "react";
import "./listcontainer.css"

function ItemCount() {
    const [cont, setCont] = useState(0);
    let stock=10;
    const sumarContador= ()=>{
        if(cont >= stock){
            alert ("NO DISPONEMOS DE MAS U. EN STOCK")
        }else{
            setCont(cont+1);
        }
    }
    const restarContador = ()=>{
        if(cont <= 0){
            alert ("EL MINIMO DE COMPRA ES DE 1")
        }else{
            setCont(cont-1);
        }
    }
    
    return(
    <div className="contenedorContador">
    <button onClick={restarContador} className="boton">-</button>
    <label >{cont}</label>
    <button onClick={sumarContador} className="boton">+</button>
    <button className="boton">Agregar a Carrito</button>
    </div>
    )
}

export default ItemCount