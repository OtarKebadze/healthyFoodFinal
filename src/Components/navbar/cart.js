import { useCartContext } from "../../context/cartContext"


function Cart(){
    const { cartList,vaciarCart} = useCartContext()
    return(
    <div className="prueba">
    {cartList.map(item =>
    <div key={item.id}>
    <p>{item.nombre}</p>
    <p>{item.cnt}</p>
    <button onClick={vaciarCart}>Vaciar</button>
    </div>
    )}
    </div>
    )
}
export default Cart