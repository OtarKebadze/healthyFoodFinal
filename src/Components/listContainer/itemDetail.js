import "./listcontainer.css"
import ItemCount from "./itemcount"
import IrCarrito from "./botonIrCarrito"
import {useState} from "react";
import { Link } from "react-router-dom";


function ItemDetail({element}){
        const [cnt, setCnt] = useState(0)
        const onAdd =(cnt)=>{
        setCnt(cnt++)
        }
        return (
        <>
        <div className="contenedorElemento"> 
        <section><img src={element.img} /></section>
        <div>{element.nombre}</div>
        <p>{element.descripcion}</p>
        <p>${element.precio}</p>
        {
                cnt===0
                ?
                <div className="contenedorContadorElemento"><ItemCount init={cnt} stock={element.stock} onAdd={onAdd}/></div>
                : 
                <Link to="/cart"><IrCarrito /></Link>
                
        }
        </div>
        </>
        )
        
}

export default ItemDetail