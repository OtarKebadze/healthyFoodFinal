import { createContext , useState , useContext } from "react";



const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


function CartContextProv ({children}){
    const [cartList, setCartList] = useState([])
    const agregarCart = (item)=>{
        if (existeItem(cartList !==[])){
        cartList.forEach(e =>{
            if (e.id === item.id) {
            alert("ESTE ITEM YA EXISTE EN EL CARRITO")
            return
            }
        })
        }else{
            setCartList ([...cartList , item])
        }
        
        }

    const vaciarCart = ()=>{
    setCartList([])}

    function existeId(id){
        for (let e of cartList){
        return e.id
        }
    }
    function existeItem(id){
        if (existeId(id !== undefined)) {
        return cartList
        } else {
        return false
        }
    }
    console.log(existeId())
    console.log(existeItem())
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