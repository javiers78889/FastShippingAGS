import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Profile } from "../componentes/Profile";
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
    const [isNewPaqueteAdded, setIsNewPaqueteAdded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPaquetes();
    }, [isNewPaqueteAdded]);

    const addPaquetes = async (obj) => {
        const precio = obj.peso * obj.tarifas;
        const tarifas = obj.tarifas;
        const usuarie = await findAllUsers();
        const { usuario } = obj;
        const filtro = usuarie.filter(u => u.usuario === usuario);
        if (filtro.length === 0) {
            Swal.fire({
                title: "Usuario no encontrado",
                text: "El usuario no se encontró.",
                icon: "error"
            });
            return;
        }
        const telefono = filtro[0].telefono;
        const nombre = filtro[0].nombre;
        const nuevoPaquete = { ...obj, precio, telefono, nombre, tarifas };

        const posteo = await registerAllPaquetes(nuevoPaquete);


        Swal.fire({
            title: "Paquete Registrado!",
            text: "Presione Ok para continuar!",
            icon: "success"
        });
        dispatch({
            type: 'addProduct',
            payload: posteo,
        });
        
        setIsNewPaqueteAdded(prev => !prev);
        
        navigate('profile/paquetes');
      

    };

    const addUsers = async (obj) => {
        const nuevoUsuario = { ...obj }; // Asegúrate de que el objeto sea un usuario



        Swal.fire({
            title: "Usuario Creado!",
            text: "Presione Ok para continuar!",
            icon: "success"
        });
        navigate('profile/paquetes');
        const posteo = await registerAllUsers(nuevoUsuario);

    };

    const Entregar = async (productId) => {
        const paqu =Array.isArray(paquetes.data) ? paquetes.data : [];
        const filtrado = paqu.find(pack => pack.id === productId);
        console.log(filtrado)
        const status = 'Entregado ✅';
        const pago = 'Pagado ✅';

        if (filtrado) {
            const { id } = filtrado;

            
            setIsNewPaqueteAdded(prev => !prev);
            navigate('profile/paquetes');
            Swal.fire({
                title: "Paquete Entregado!",
                text: "Presione 'OK', Para Continuar",
                icon: "success"
            });
       
                const actualizar = await updatePaquetes({ id, pago, status });
                dispatch({
                    type: 'DeliveredProduct',
                    payload: actualizar
                });
                
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
                <Route path="profile/paquetes" element={<Paquetes pago={pagarPaquete} Entregar={Entregar} Login={Login} isLoading={isLoading} paquetess={paquetes} />} />
                <Route path="/*" element={<Navigate to="profile" />} />
            </Routes>
        </>
    );
};
