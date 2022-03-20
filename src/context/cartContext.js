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

        return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            eliminaItem,
            cantTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProv