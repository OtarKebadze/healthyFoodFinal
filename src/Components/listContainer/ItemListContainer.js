import { createElement } from "react"
import "./listcontainer.css"


const greeting = ()=> {
    const contenedor=document.getElementById("contenedorLista")
    contenedor.append("HOLA BIENVENIDO!!!!")
}


function ItemListContainer() {
    return(
    <div className="contenedorLista">
    <div id="contenedorLista"><button onClick={greeting}>HACEME CLICK </button></div>
    </div>
    )
}
export default ItemListContainer