import { useEffect, useReducer, useState } from "react";
import { findAllUsers, registerAllUsers } from "../auth/services/Users";
import { PaqueteReducer } from "../Reducer/PaqueteReducer";
import { findAllPaquetes, registerAllPaquetes, updatePaquetes } from "../services/Paquete";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validarPago } from "../payment/validarPago";
import { handlePayment } from "../payment/pago";

export const useRestApi = () => {
    const [paquetes, dispatch] = useReducer(PaqueteReducer, []);
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
    }, []);

    const addPaquetes = async (obj) => {




        const usuarie = await findAllUsers();
        let precio = 0
        let tarifas = 0
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
        if (filtro[0].plan === 'Plan Emprendedor') {
            tarifas = 2.60
            precio = (obj.peso * tarifas).toFixed(2);
        } else if (filtro[0].plan === 'Plan Standar') {
            if (obj.peso === '1') {
                tarifas = 3
                precio = (obj.peso * tarifas).toFixed(2);
            } else if (obj.peso > '1') {
                tarifas = 2.75
                precio = (obj.peso * tarifas).toFixed(2);
            }
        } else if (filtro[0].plan === 'Plan Delivery') {
            tarifas = 3.25;
            precio = (obj.peso * tarifas).toFixed(2);

        }
        const telefono = filtro[0].telefono;
        const nombre = filtro[0].nombre;
        const nuevoPaquete = { ...obj, precio, telefono, nombre, tarifas };

        await registerAllPaquetes(nuevoPaquete);

        Swal.fire({
            title: "Paquete Registrado!",
            text: "Presione Ok para continuar!",
            icon: "success"
        });

        // Refresca la lista de paquetes después de agregar uno nuevo
        fetchPaquetes();

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
        const paqu = Array.isArray(paquetes.data) ? paquetes.data : [];
        const filtrado = paqu.find(pack => pack.id === productId);

        if (!filtrado) {
            console.error("No se encontró el paquete con el id:", productId);
            return;
        }

        console.log(filtrado); // Asegúrate de que esto sea un objeto válido

        const status = 'Entregado ✅';
        const pago = 'Pagado ✅';

        const { id } = filtrado;

        try {
            const actualizar = await updatePaquetes({ id, pago, status });
            Swal.fire({
                title: "Paquete Entregado!",
                text: "Presione 'OK', Para Continuar",
                icon: "success"
            });

            dispatch({
                type: 'DeliveredProduct',
                payload: actualizar
            });
        } catch (error) {
            console.error("Error al entregar el paquete:", error);
        }
        // Refresca la lista de paquetes después de agregar uno nuevo
        fetchPaquetes();
        navigate('profile/paquetes');
    };


    const pagarPaquete = async (pagos) => {
        // Accede a la propiedad correcta del objeto JSON
        const paqu = Array.isArray(paquetes.data) ? paquetes.data : [];
        const filtraPago = paqu.find(pack => pack.id === pagos);
        const pago = 'Pagado ✅';
        //PAGO


        const pagando = handlePayment(filtraPago.precio, filtraPago.tracking, filtraPago.id); // Llama a la función para manejar el pago
        console.log(pagando.data)

        if (pagando) {

            validarPago()
        }
    };

    return {

        paquetes,
        isLoading,
        addPaquetes,
        addUsers,
        Entregar,
        pagarPaquete,


    }

}