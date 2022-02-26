import { useState , useEffect } from "react";
import { getFetch } from "./item";
import ItemCount from "./itemcount";


function ItemList(){
    const [prods, setProds]= useState([])
    const [load, setLoad]= useState(true)
    useEffect(() => {
    getFetch
    .then((res)=>{
    return res
    })
    .then((resp)=> setProds(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoad(false))
    
    },[])
    return(

    <div className="contenedorLista">
    { load  ? <h1> Cargando....</h1>
            :

    prods.map((item)=>
    <>
    <div className="contenedorCard">
    <div className="contenedorProducto"><p key={item.id}>{item.nombre} ${item.precio}</p></div>
    <hr/>
    <section className="contenedorImagen"><img src={item.img}/></section>
    <p className="contenedorDescripcion">{item.descripcion}</p>
    <div className="contenedorCompra"><ItemCount/><button>Añadir Al Carrito</button></div>
    </div>
    </>
    )
    }
    </div>
    
    )
}

export default ItemList
