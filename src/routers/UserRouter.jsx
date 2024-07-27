import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Profile } from "../componentes/Profile"
import { NavBar } from "../componentes/NavBar"
import { useReducer, useState } from "react"
import { Paquetes } from "../componentes/Paquetes"
import { Register } from "../componentes/Register"
import { PaqueteReducer } from "../Reducer/PaqueteReducer"
import { Paquete } from "../services/Paquete"



export const UserRouter = () => {
    //const [paquetes, setPaquetes] = useState(UserPaquetes);
    const [paquetes, dispatch] = useReducer(PaqueteReducer, Paquete)
    const navigate=useNavigate();
    const addPaquetes = (obj) => {

        console.log(obj);
        const id = paquetes.length + 1;
        const precio=obj.peso*2.50;
        const nuevoPaquete = { ...obj, id ,precio};
        dispatch({
            type: 'addProduct',
            payload: nuevoPaquete,
        })
        navigate('profile/paquetes');
    };

    return (
        <>
            
            <Routes>
                <Route path="profile" element={<Profile paquetes={paquetes} />} />
                <Route path="register" element={<Register addPaquetes={addPaquetes} />} />
                <Route path="profile/paquetes" element={<Paquetes paquetes={paquetes} />} />
                <Route path="/*" element={<Navigate to="profile" />} />

            </Routes>
        </>

    )
}
