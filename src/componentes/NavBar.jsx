import { Link, NavLink } from "react-router-dom"

export const NavBar = ({logout}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FastShippingAGS</Link>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="profile/paquetes">Mis Paquetes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="register">Asignar Paquete</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Historial de Pagos</a>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link active" onClick={logout}>Salir</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    )
}