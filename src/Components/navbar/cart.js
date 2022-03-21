import { useCartContext } from "../../context/cartContext"


function Cart(){
    const { cartList , vaciarCart, eliminaItem } = useCartContext()

    

    return(
    <div className="contenedorCart">
<div className="contenedorCards">
    {cartList.map(item =>
    
    <div className="itemCart" key={item.id}>
    <section className="section1"> 
    <p>{item.nombre}</p>
    <p>Cantidad: {item.cantidad} </p>
    </section >
    <section className="section2">
    <button onClick={()=> eliminaItem(item.id)} > X </button>
    </section>
    </div>
    )}
    </div>
    <div className="contenedorBoton">
    <section><button className="botonVaciar" onClick={vaciarCart}>Vaciar Carrito</button></section>
    </div>
    </div>
    )
}
export default Cart