import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Profile } from "../componentes/Profile"
import { NavBar } from "../componentes/NavBar"
import { useReducer, useState } from "react"
import { Paquetes } from "../componentes/Paquetes"
import { Register } from "../componentes/Register"
import { PaqueteReducer } from "../Reducer/PaqueteReducer"
import { Paquete } from "../services/Paquete"
import Swal from "sweetalert2"



export const UserRouter = ({ Login }) => {
    //const [paquetes, setPaquetes] = useState(UserPaquetes);
    const [paquetes, dispatch] = useReducer(PaqueteReducer, Paquete)
    const navigate = useNavigate();

    const addPaquetes = (obj) => {


        const id = paquetes.length + 1;
        const precio = obj.peso * 2.50;
        const nuevoPaquete = { ...obj, id, precio };
        dispatch({
            type: 'addProduct',
            payload: nuevoPaquete,
        })

        Swal.fire({
            title: "Paquete Registrado!",
            text: "Presione Ok para continuar!",
            icon: "success"
          });
        navigate('profile/paquetes');
    };

    const Entregar = (product) => {

        const filtrado = paquetes.find(pack => pack.id === product);

        console.log(filtrado)

        dispatch({
            type: 'DeliveredProduct',
            payload: filtrado
        })

    }


    const pago = (pagos) => {

        const filtraPago = paquetes.find(pack => pack.id === pagos);



        dispatch({
            type: 'Pago',
            payload: filtraPago,
        })



    }



    return (
        <>

            <Routes>
                <Route path="profile" element={<Profile paquetes={paquetes} Login={Login} />} />
                <Route path="register" element={<Register addPaquetes={addPaquetes} />} />
                <Route path="profile/paquetes" element={<Paquetes pago={pago} Entregar={Entregar} Login={Login} paquetes={paquetes} />} />
                <Route path="/*" element={<Navigate to="profile" />} />

            </Routes>
        </>

    )
}
