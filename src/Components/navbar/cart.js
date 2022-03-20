import { useCartContext } from "../../context/cartContext"


function Cart(){
    const { cartList , vaciarCart, eliminaItem } = useCartContext()

    

    return(
    <div>
    {cartList.map(item =>
    <div className="itemCart" key={item.id}>
    <p>{item.nombre}</p>
    <p>{item.cantidad}</p>
    <button onClick={()=> eliminaItem(item.id)} > X </button>
    </div>
    )}
    <section><button className="botonVaciar" onClick={vaciarCart}>Vaciar</button></section>
    </div>
    
    )
}
export default Cart