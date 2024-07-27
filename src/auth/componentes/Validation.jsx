import { useReducer } from "react";
import { NavBar } from "../../componentes/NavBar";
import { UserRouter } from "../../routers/UserRouter";
import { LoginReducer } from "../../auth/reducer/LoginReducer";

import { Login } from "./Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./Nav";

const initialLog = {
    usuario: undefined,
    contraseña: undefined,
    isAuth: false,
};

export const Validation = () => {
    const [loginState, dispatch] = useReducer(LoginReducer, initialLog);

    const logueo = () => {
        const pase = {
            usuario: "ags/566",
            contraseña: "asdasd",
            isAuth: true,
        };
        dispatch({
            type: 'login',
            payload: pase,
        });

        console.log(loginState);
    };
    const logout = () => {

        dispatch({
            type: 'logout',
        });

        console.log(loginState);
    };

    return (
        <>
            {loginState.isAuth ? (
                <NavBar logout={logout} />
            ) : (
                <Nav />
            )}

            <Routes>
                {loginState.isAuth ? (
                    <Route path="/*" element={<UserRouter  />} />
                ) : (
                    <>
                        <Route path="/login" element={<Login Logueo={logueo} />} />
                        <Route path="/*" element={<Navigate to="/login" />} />
                    </>
                )}
            </Routes>
        </>
    );
};
