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
    <div>
    <button onClick={restarContador}>-</button>
    <input type="number" value= {cont} stock={stock} min="1"/>
    <button onClick={sumarContador}>+</button>
    </div>
    </div>
    )
}

export default ItemCount