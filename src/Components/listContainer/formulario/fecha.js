
    function Fecha (){
        const f = new Date();

        return (
        <>{f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()}</>
        )
    }
    export default Fecha