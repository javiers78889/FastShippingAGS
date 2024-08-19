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
import { handlePayment } from "../payment/pago";
import { validarPago } from "../payment/validarPago";
import { useRestApi } from "../hooks/useRestApi";

export const UserRouter = ({ Login }) => {
   const{paquetes,isLoading,addPaquetes,addUsers,Entregar,pagarPaquete,}=useRestApi()

 

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
