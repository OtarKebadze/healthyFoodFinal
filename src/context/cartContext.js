import { createContext , useState , useContext } from "react";



const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProv ({children}){
    const [cartList, setCartList] = useState([])
    const agregarCart = (item)=>{
        if (existeId(item && item.id)){
        alert("Este item ya esta en el carrito")
        return;
        }
        return setCartList ([...cartList , item])
    }
    const cantTotal = ()=>{
            let totalCantidad=0;
            cartList.map( elem => {
            totalCantidad += elem.cantidad
            });
            return totalCantidad
            }
    const vaciarCart = ()=>{
    setCartList([])}
    function existeId(id){
    return cartList.find(e=> e.id === id);
    }
    const eliminaItem = (id)=>{
        setCartList(cartList.filter(i => i.id !== id))
    }
    const realizarCompra = ()=>{
        if (cantTotal() === 0) {
        alert ("USTED NO TIENE PRODUCTOS EN EL CARRITO")
        } else {
        alert("GRACIAS POR REALIZAR SU COMPRA");
        setCartList([])
        return
        }
    }
    const condition=()=>{
        return true
    }
    const actualizarMasCantidad = ()=>{
        let item = cartList.find(e=> e.id)
        if(item.cantidad >= 1 && item.cantidad < item.stock) {
        item.cantidad++
        return setCartList ([...cartList])
        }
    }
    
    const actualizarMenosCantidad = ()=>{
        let item = cartList.find(e=> e.id)
        if(item.cantidad > 1){
        item.cantidad--
        return setCartList([...cartList])
    }else if (item.cantidad = 1 ){
    alert("EL MINIMO DE LA COMPRA ES 1")
    }
}

        return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            eliminaItem,
            cantTotal,
            realizarCompra,
            condition,
            actualizarMasCantidad, 
            actualizarMenosCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProv