import { createContext , useState , useContext } from "react";



const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProv ({children}){
    const [cartList, setCartList] = useState([])
    const agregarCart = (item)=>{
        if (existeId(item && item.id)){
        alert("ESTE PRODUCTO YA EXISTE EN EL CARRITO")
        return
        }else{
        setCartList ([...cartList , item])
        }}


    const vaciarCart = ()=>{
    setCartList([])}

    function existeId(id){
        const existe= cartList.find(e=>e.id === id)
        return existe
    }
    console.log(existeId())
        return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProv