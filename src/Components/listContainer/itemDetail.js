import "./listcontainer.css"
import ItemCount from "./itemcount"

function ItemDetail({element}){
        return (
        <>
        <div className="contenedorElemento"> 
        <section><img src={element.img} /></section>
        <div>{element.nombre}</div>
        <p>{element.descripcion}</p>
        <p>${element.precio}</p>
        <div className="contenedorContadorElemento"><ItemCount /></div>
        </div>
        </>
        )
        
}

export default ItemDetail