import { createContext , useState , useContext } from "react";
import swal from "sweetalert";



const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProv ({children}){
    const [cartList, setCartList] = useState([])
    const agregarCart = (item)=>{
        if (existeId(item && item.id)){
        swal("ESTE PRODUCTO YA EXISTE EN EL CARRITO", "" , "error")
        return
        }
        return setCartList ([...cartList , item])
    }
    const cantTotal = ()=>{
            let totalCantidad=0;
            cartList.forEach( elem => {
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
        alert ("USTED NO TIENE PRODUCTOS EN EL CARRITO" , "" , "error")
        } else {
        swal("GRACIAS POR REALIZAR SU COMPRA" , "" , "success");
        setCartList([])
        return
        }
    }
    const condition=()=>{
        return true
    }
    const actualizarMasCantidad = (id)=>{
        let item = cartList.find(e=> e.id===id)
        if(item.cantidad >= 1 && item.cantidad < item.stock) {
        item.cantidad++
        return setCartList ([...cartList])
        }else if(item.cantidad === item.stock){
        return swal("NO DISPONEMOS DE MAS UNIDADES EN STOCK", "" ,"error")
        }
    }
    
    const actualizarMenosCantidad = (id)=>{
        let item = cartList.find(e=> e.id===id)
        if(item.cantidad > 1){
        item.cantidad--
        return setCartList([...cartList])
    }else if (item.cantidad = 1 ){
    alert("EL MINIMO DE LA COMPRA ES 1")
    }
}
        console.log(cartList)
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