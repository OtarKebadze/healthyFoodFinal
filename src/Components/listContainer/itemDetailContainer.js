import ItemDetail from "./itemDetail";
import { useState , useEffect } from "react";
import logo from "./img/carga.gif";
import "./listcontainer.css"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


function ItemDetailContainer (){

    

    const { detalleId } = useParams()
    const [element, setElement]= useState({})
    const [load, setLoad]= useState(true)
        

        useEffect(() => {
            const db = getFirestore()
            const itemCollection = doc(db,"items", detalleId)
            getDoc(itemCollection)
            .then(resp => setElement ( {id:resp.id,... resp.data()}))
            .catch(err=>console.log(err))
            .finally(()=>setLoad(false))}
        ,[detalleId])

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