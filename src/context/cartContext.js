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
    const condition=()=>{
        return true
    }
    const confirmaDatos = ()=>{
        console.log("hola")
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
    const precioTotal = ()=>{
        let precioTotal=0
        cartList.forEach( e => {
        precioTotal += e.precio * e.cantidad
        })
        return precioTotal
    }
    const actualizarMenosCantidad = (id)=>{
        let item = cartList.find(e=> e.id===id)
        if(item.cantidad > 1){
        item.cantidad--
        return setCartList([...cartList])
    }else if (item.cantidad = 1 ){
    swal("EL MINIMO DE LA COMPRA ES 1","", "error")
    }
}
    const precioPorProducto = ()=>{ 
        let precio=0
        let cantidad=0
        let precioProdTot =0
        cartList.forEach( e =>{
        precio = e.precio
        cantidad = e.cantidad
        precioProdTot = precio*cantidad
        }
        )
        return precioProdTot
    }
        console.log(cartList)
        console.log(precioPorProducto())
        return (
        <CartContext.Provider value={{
            cartList,
            setCartList,
            confirmaDatos,
            agregarCart,
            vaciarCart,
            eliminaItem,
            cantTotal,
            condition,
            actualizarMasCantidad, 
            actualizarMenosCantidad,
            precioTotal,
            precioPorProducto,
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProv