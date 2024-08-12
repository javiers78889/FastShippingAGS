import axios from "axios";


const api = 'https://fastshippingback.onrender.com/paquetes';

export const findAllPaquetes = async () => {
    try {
        const response = await axios.get(api); // 10 segundos
        return response.data;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}



export const registerAllPaquetes = async ({ usuario, tracking, peso, precio, status, pago, telefono, nombre, tarifas }) => {

    try {
        const posteo = await axios.post(api, { usuario, tracking, peso, precio, status, pago, telefono, nombre, tarifas })
        return posteo.data;

    } catch (error) {
        console.log(error);
    }
    return undefined;

}


export const updatePaquetes = async ({ id, status, pago, }) => {

    try {

        const actualiza = await axios.put(`${api}/${id}`, { status, pago });

        return actualiza.data;

    } catch (error) {

        console.error(error);
    }

    return undefined;

}

