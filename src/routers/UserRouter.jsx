import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Profile } from "../componentes/Profile";
import { NavBar } from "../componentes/NavBar";
import { useEffect, useReducer, useState } from "react";
import { Paquetes } from "../componentes/Paquetes";
import { Register } from "../componentes/Register";
import { PaqueteReducer } from "../Reducer/PaqueteReducer";
import { findAllPaquetes, registerAllPaquetes, updatePaquetes } from "../services/Paquete";
import Swal from "sweetalert2";
import { findAllUsers, registerAllUsers } from "../auth/services/Users";
import { RegisterUsers } from "../componentes/RegisterUsers";

export const UserRouter = ({ Login }) => {
    const [paquetes, dispatch] = useReducer(PaqueteReducer, []);
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    const fetchPaquetes = async () => {
        try {
            const result = await findAllPaquetes();
            dispatch({
                type: 'LoadingProduct',
                payload: result,
            });
        } catch (error) {
            console.error("Error al cargar los paquetes:", error);
            Swal.fire({
                title: "Error",
                text: "No se pudieron cargar los paquetes.",
                icon: "error"
            });
        }
        setIsLoading(false)
    };

    // Cargar paquetes al inicio

    useEffect(() => {
        fetchPaquetes();
    }, [paquetes, Login]);

    const addPaquetes = async (obj) => {
        const precio = obj.peso * obj.tarifas;
        const tarifas = obj.tarifas;
        const usuarie = await findAllUsers();
        const { usuario } = obj;
        const filtro = usuarie.filter(u => u.usuario === usuario)
        const telefono = filtro[0].telefono;
        const nombre = filtro[0].nombre
        const nuevoPaquete = { ...obj, precio, telefono, nombre, tarifas };


        

        try {
            const posteo = await registerAllPaquetes(nuevoPaquete);
            dispatch({
                type: 'addProduct',
                payload: posteo,
            });

            Swal.fire({
                title: "Paquete Registrado!",
                text: "Presione Ok para continuar!",
                icon: "success"
            });
            navigate('profile/paquetes');
        } catch (error) {
            console.error("Error al registrar el paquete:", error);
            Swal.fire({
                title: "Error",
                text: "El registro del paquete falló.",
                icon: "error"
            });
        }
    };
    const addUsers = async (obj) => {

        const nuevoPaquete = { ...obj };


        console.log(nuevoPaquete)




        try {
            const posteo = await registerAllUsers(nuevoPaquete);

            Swal.fire({
                title: "Usuario Creado!",
                text: "Presione Ok para continuar!",
                icon: "success"
            });
            navigate('profile/paquetes');
        } catch (error) {
            console.error("Error al registrar el paquete:", error);
            Swal.fire({
                title: "Error",
                text: "El registro del paquete falló.",
                icon: "error"
            });
        }
    };

    const Entregar = async (productId) => {
        const filtrado = paquetes.find(pack => pack.id === productId);
        const status = 'Entregado ✅';
        const pago = 'Pagado ✅';

        if (filtrado) {
            const { id } = filtrado;

            try {
                const actualizar = await updatePaquetes({ id, pago, status });
                dispatch({
                    type: 'DeliveredProduct',
                    payload: actualizar
                });

                Swal.fire({
                    title: "Paquete Entregado!",
                    text: "Presione 'OK', Para Continuar",
                    icon: "success"
                });
            } catch (error) {
                console.error("Error al entregar el paquete:", error);
                Swal.fire({
                    title: "Error",
                    text: "No se pudo entregar el paquete.",
                    icon: "error"
                });
            }
        }
    };

    const pagarPaquete = async (pagos) => {
        const filtraPago = paquetes.find(pack => pack.id === pagos);
        const pago = 'Pagado ✅';

        if (filtraPago) {
            const { status, id } = filtraPago;

            try {
                const actualizar = await updatePaquetes({ id, pago, status });
                dispatch({
                    type: 'Pago',
                    payload: actualizar,
                });

                Swal.fire({
                    title: "Paquete Pagado Con Éxito!",
                    text: "Presione 'OK', Para Continuar!",
                    icon: "success"
                });
            } catch (error) {
                console.error("Error al actualizar el estado de pago:", error);
                Swal.fire({
                    title: "Error",
                    text: "No se pudo actualizar el estado de pago.",
                    icon: "error"
                });
            }
        }
    };

    return (
        <>
            <Routes>
                <Route path="profile" element={<Profile paquetes={paquetes} Login={Login} />} />
                <Route path="register" element={<Register addPaquetes={addPaquetes} Login={Login} />} />
                <Route path="register/users" element={<RegisterUsers addUsers={addUsers} />} />
                <Route path="profile/paquetes" element={<Paquetes pago={pagarPaquete} Entregar={Entregar} Login={Login} isLoading={isLoading} paquetes={paquetes} />} />
                <Route path="/*" element={<Navigate to="profile" />} />
            </Routes>
        </>
    );
};
