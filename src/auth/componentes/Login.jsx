
import { useState } from 'react';
import fastShippingImg from '../../img/FAST_SHIPPING_AGS.png';
const initalUserValid = {
    'usuario': '',
    'password': '',
    
}
export const Login = ({ Logueo }) => {
    const [UserValid, SetUserValid] = useState(initalUserValid);
    const { usuario, password } = UserValid;

    const OnInputchangeLog = (event) => {
        const { name, value } = event.target;
        SetUserValid({ ...UserValid, [name]: value });
       
    }
    const submit = (event) => {
        event.preventDefault();
        Logueo(UserValid);

    }


    return (
        <>

            <div className="form-container form-overlay w-60 d-flex align-items-center justify-content-center my-5 ">
                <form className="w-50 shadow-lg p-4 bg-white rounded" onSubmit={submit}>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <img className="img-fluid " src={fastShippingImg} width={100} height={100} alt="Foto de perfil" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control" name="usuario" placeholder='Usuario' value={usuario} onChange={OnInputchangeLog} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" name="password" placeholder='Contraseña' value={password} onChange={OnInputchangeLog} />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Login</button>
                </form>



            </div>

        </>
    )
}