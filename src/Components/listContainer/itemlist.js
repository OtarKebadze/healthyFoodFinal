import { useState , useEffect } from "react";
import { getFetch } from "./item";
import ItemCount from "./itemcount";
import logo from "./img/carga.gif";


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
<>  
    { load  ? <img src={logo}/>
            :
            prods.map((item)=>
            <div className="contenedorCard" key={item.id}>
            <div className="contenedorProducto"><p>{item.nombre}</p></div>
            <div className="contenedorPrecio"><p>${item.precio}</p></div>
            <section className="contenedorImagen"><img src={item.img}/></section>
            <p className="contenedorDescripcion">{item.descripcion}</p>
            <div className="contenedorCompra"><ItemCount/></div>
            </div>
            )
            
    }
</>
)
}

export default ItemList
