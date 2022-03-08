import ItemDetail from "./itemDetail";
import { useState , useEffect } from "react";
import { getFetch } from "./item";
import ItemCount from "./itemcount";
import "./listcontainer.css"

function ItemDetailContainer (){
    const [element, setElement]= useState({})
            useEffect(() => {
            getFetch
            .then((res)=>{
            return res
            })
            .then((resp)=> setElement(resp.find( element => element.id === 1)))
            .catch((err)=>console.log(err))
            },[])  
            console.log(element)  
    return(
    <div>
        <ItemDetail element={element} />
    </div>
    )
}

export default ItemDetailContainer