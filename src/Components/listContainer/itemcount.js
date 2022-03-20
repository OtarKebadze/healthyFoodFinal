import {useState} from "react";
import "./listcontainer.css"

function ItemCount({stock, onAdd}){

    const [cont, setCont] = useState(1);
    const sumarContador= ()=>{
        if(cont >= stock){
            alert ("NO DISPONEMOS DE MAS U. EN STOCK")
        }else{
            setCont(cont+1);
        }
    }
    const restarContador = ()=>{
        if(cont <= 1){
            alert ("EL MINIMO DE COMPRA ES DE 1")
        }else{
            setCont(cont-1);
        }
        
    }
    const agregarCarrito = ()=>{
        onAdd(cont);
    }

    return(
    <div className="contenedorContador">
    <button onClick={restarContador} className="boton">-</button>
    <label >{cont}</label>
    <button onClick={sumarContador} className="boton">+</button>
    <button className="boton" onClick={agregarCarrito}>Agregar a Carrito</button>
    </div>
    )
}

export default ItemCount