import "./listcontainer.css"
import ItemCount from "./itemcount"
import IrCarrito from "./botonIrCarrito"

import { useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";


function ItemDetail({element}){
        const [cnt, setCnt] = useState(0)
        const {agregarCart} = useCartContext()
        const onAdd =(cnt)=>{
        setCnt(cnt)
        agregarCart({...element, cnt})
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