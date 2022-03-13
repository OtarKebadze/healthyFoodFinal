import { useState , useEffect } from "react";
import { getFetch } from "./item";
import ItemCount from "./itemcount";
import logo from "./img/carga.gif";
import { Link, useParams } from "react-router-dom";


function ItemList(){
    const [prods, setProds]= useState([])
    const [load, setLoad]= useState(true)
    const { categoriaId } = useParams()
    useEffect(() => {
        if (categoriaId) {
        getFetch
        .then((res)=>{
        return res
        })
        .then((resp)=> setProds(resp.filter( prod => prod.categoria === categoriaId)))
    .catch(err=>console.log(err))
        .finally(()=>setLoad(false))
        } else {
    getFetch
    .then((res)=>{
    return res
    })
    .then((resp)=> setProds(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoad(false))
        }
            },[categoriaId])
return(
<>  
    { load  ? <img src={logo}/>
            :
            prods.map((item)=>
            <div className="contenedorCard" key={item.id}>
            <div className="contenedorProducto"><p>{item.nombre}</p></div>
            <div className="contenedorCategoria"><p className="titulo2">{item.categoria}</p></div>
            <div className="contenedorPrecio"><p>${item.precio}</p></div>
            <section className="contenedorImagen"><img src={item.img}/></section>
            <p className="contenedorDescripcion">{item.descripcion}</p>
            <div><Link to={`/detalle/${item.id}`}><button className="boton">Ver Descripción</button></Link></div>
            </div>
            )
            
    }
</>
)
}

export default ItemList
