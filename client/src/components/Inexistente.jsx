import { NavLink } from "react-router-dom"

export const Inexistente = () => {

return (
    <div>
        ESTA RUTA NO EXISTE EN BENETFLIX. <NavLink to='/home'> VUELVE A NUESTRA PAGINA PRINCIAPAL SI LO DESEAS </NavLink>
    </div>
)

}