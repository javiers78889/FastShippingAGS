import { useState } from "react";

const paqDefault = {
    "usuario": "",
    "contraseña": "",
    "isAuth": 0,
    "nombre": "",
    "plan": "",
    "telefono": "",
}

export const RegisterUsers = ({ addUsers, Login }) => {
    const [paq, setPaq] = useState(paqDefault);

    const { usuario, contraseña, nombre, telefono,plan } = paq;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setPaq({ ...paq, [name]: value });
    }



    const handlerSubmit = (event) => {
        event.preventDefault();
        addUsers(paq);
    }

    return (
        <div className="form-container form-overlay w-80 d-flex justify-content-center my-5">
            <form className="w-50 shadow-lg p-4 bg-white rounded" onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" name="usuario" value={usuario} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="contraseña" value={contraseña} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" value={nombre} onChange={onInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="options">Elige una opción</label>
                    <select
                        id="options"
                        className="form-select"
                        name="plan" // Debe coincidir con el nombre del estado
                        value={plan}
                        onChange={onInputChange}
                    >
                        <option value="">Selecciona...</option>
                        <option value="peso">Peso</option>
                        <option value="volumen">Volumen</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" name="telefono" value={telefono} onChange={onInputChange} />
                </div>

                <button type="submit" className="btn btn-primary form-control">Crear</button>
            </form>
        </div>
    );
}
