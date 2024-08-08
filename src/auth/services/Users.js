
import axios from "axios";


const api = 'http://localhost:4000/users';

export const findAllUsers = async () => {
    try {
        const response = await axios.get(api)
        return response.data;

    } catch (error) {

        console.log(error);

    }

    return undefined;

}


export const registerAllUsers = async ({ usuario, contraseña, isAuth, nombre, plan, telefono }) => {

    try {
        const posteo = await axios.post(api, { usuario, contraseña, isAuth, nombre, plan, telefono })
        return posteo.data;

    } catch (error) {
        console.log(error);
    }
    return undefined;

}


