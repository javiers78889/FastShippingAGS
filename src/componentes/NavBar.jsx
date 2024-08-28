import { Link, NavLink } from "react-router-dom"

export const NavBar = ({ logout, Login }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid d-flex justify-content-between">
                <Link className="navbar-brand" to="/">FastShippingAGS</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="profile/paquetes">   {Login.user[0].usuario === 'admin' ? 'Paquetes Registrados' : 'Mis paquetes'}</NavLink>
                        </li>
                        {Login.user[0].usuario === 'admin' ? (
                            <>

                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="register/users">Crear Usuario</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="register">Asignar Paquete</NavLink>
                                </li>


                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="nav-link">{Login.user[0].usuario} </p>
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