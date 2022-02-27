import {useState} from "react";
import "./listcontainer.css"

function ItemCount() {
    const [cont, setCont] = useState(1);
    let stock=10;
    const sumarContador= ()=>{
        if(cont >= 10){
            alert ("NO DISPONEMOS DE MAS EN STOCK")
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
    
    return(
    <div className="contenedorContador">
    <button onClick={restarContador} className="boton">-</button>
    <label >{cont}</label>
    <button onClick={sumarContador} className="boton">+</button>
    </div>
    )
}

export default ItemCount