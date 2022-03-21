import ItemDetail from "./itemDetail";
import { useState , useEffect } from "react";
import { getFetch } from "./item";
import logo from "./img/carga.gif";
import "./listcontainer.css"
import { useParams } from "react-router-dom";

function ItemDetailContainer (){
    const { detalleId } = useParams()
    const [element, setElement]= useState({})
    const [load, setLoad]= useState(true)
            useEffect(() => {
            getFetch
            .then((res)=>{
            return res
            })
            .then((resp)=> setElement(resp.find( element => element.id === detalleId)))
            .catch((err)=>console.log(err))
            .finally(()=> setLoad(false))
            },[detalleId])  
    return(
    <>
        {
        load ? <div className="centrado"><img src={logo}/></div>
             :  <div className="contenedorDetalle">
        <       ItemDetail element={element} />
                </div>}
    </>
    )
}

export default ItemDetailContainer