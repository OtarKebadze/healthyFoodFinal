import { useCartContext } from "../../../context/cartContext"

function Formulario(){

    const {realizarCompra , precioTotal} = useCartContext()

    return(
    <div>
        <form className="contenedorDatos">
        <label >Nombre</label>
        <input name="Nombre" placeholder="Ingrese su nombre" required />
        <label >Mail</label>
        <input type="email" name="Mail" placeholder="Ingrese su Mail" required />
        <label >Telefono</label>
        <input type="number" name="Telefono" placeholder="123-456-789" required />
        <p>El <b>TOTAL</b> es de : ${precioTotal()}</p>
        <input type="submit" id="submit" value="Terminar Compra" onClick={realizarCompra}/>
        </form>
    </div>
    )

}

export default Formulario