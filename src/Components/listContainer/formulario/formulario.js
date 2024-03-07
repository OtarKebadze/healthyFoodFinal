import { useCartContext } from "../../../context/cartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import swal from "sweetalert"

function Formulario(){

    const { vaciarCart} = useCartContext()

    const {cartList, precioTotal} = useCartContext()
    
    const sendOrder= ()=>{
        let order = {}
        const date = ()=>{
        let f = new Date();
        return f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
        }
        const nameBuyer=document.getElementById("name").value;
        const emailBuyer= document.getElementById("mail").value;
        const phoneBuyer= document.getElementById("phone").value;
        order.buyer = {name:nameBuyer, email: emailBuyer,
        phone: phoneBuyer}
        order.date= date();
        order.total= precioTotal();
        order.items= cartList.map(item=>{
        const id = item.id;
        const nombre = item.nombre;
        const precio= item.cantidad * item.precio;

        return {id,nombre,precio}
        })
        const db = getFirestore();
            const orderCollection =  collection (db, "orders");
            addDoc(orderCollection, order)
            .then(resp => swal("EL CODIGO DE SU COMPRA ES : " + resp.id , "", "success"))
            .catch(err => console.log(err))
            .finally(()=> console.log("Compra Terminada"))
        vaciarCart()
    }
    
    return(
    <div>
        <form className="contenedorDatos">
        <label >Nombre</label>
        <input id="name" name="Nombre" placeholder="Ingrese su nombre" required/>
        <label >Mail</label>
        <input id="mail" type="email" name="Mail" placeholder="Ingrese su Mail" required/>
        <label >Telefono</label>
        <input id="phone" type="number" name="Telefono" placeholder="123-456-789" required/>
        <p>El <b>TOTAL</b> es de : ${precioTotal()}</p>
        <input type="submit" onClick={sendOrder} value="Realizar Compra"/>
        </form>
    </div>
    )

}

export default Formulario