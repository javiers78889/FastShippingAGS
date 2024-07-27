import { useState } from "react";

const paqDefault = {
    "usuario": "",
    "tracking": "",
    "peso": "0",
    "precio": "0",
    "status": "Pendiente",
    "fecha": "2 de septiembre del 2024"
}
export const Register = ({ addPaquetes }) => {
    

    const [paq, setPaq] = useState(paqDefault);
    const { usuario, tracking, peso } = paq;


    const onInputChange = (event) => {

        const { name, value } = event.target;

        setPaq({ ...paq, [name]: value });


    }
    const handlerSubmit = (event) => {
        event.preventDefault();
        addPaquetes(paq);
    }
    return (
        <>

            <div className="form-container form-overlay w-80 d-flex justify-content-center my-5 ">
                <form className="w-50 shadow-lg p-4 bg-white rounded" onSubmit={handlerSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control" name="usuario" value={usuario} onChange={onInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">N°Tracking</label>
                        <input type="text" className="form-control" name="tracking" value={tracking} onChange={onInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Peso</label>
                        <input type="number" className="form-control" name="peso" value={peso} onChange={onInputChange} />
                    </div>

                    <button type="submit" className="btn btn-primary form-control">Crear</button>
                </form>



            </div>

        </>
    )
}
