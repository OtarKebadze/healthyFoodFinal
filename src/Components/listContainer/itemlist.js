import { useState , useEffect } from "react";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import logo from "./img/carga.gif";
import { Link, useParams } from "react-router-dom";


function ItemList(){
    const [prods, setProds]= useState([])
    const [load, setLoad]= useState(true)
    const { categoriaId } = useParams()
    
     useEffect(() => {
    if (categoriaId) {
        const db = getFirestore()
        const itemCollection = collection (db,"items")
        const qFilter=query(itemCollection,
        where("categoria","==", categoriaId))
        getDocs(qFilter)
        .then(resp => setProds(resp.docs.map(item =>({id:item.id, ... item.data()}))))
        .catch(err=>console.log(err))
        .finally(()=>setLoad(false))
    }else{
            const db = getFirestore()
            const itemCollection = collection (db,"items")
            getDocs(itemCollection)
            .then(resp => setProds(resp.docs.map(item =>({id:item.id, ... item.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoad(false))
    }}, [categoriaId])

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
