import fastShippingImg from '../img/FAST_SHIPPING_AGS.png';

export const Profile = ({ paquetes }) => {
  

    // Calculate the total number of packages
    const totalPaquetes = paquetes.length;

    return (
        <>
            <div className=" d-flex align-items-center justify-content-center my-5 ">
                <img className=" img-fluid  " src={fastShippingImg} width={200} height={200} alt="Foto de perfil" />
            </div>
            <div className="d-flex align-items-center justify-content-center container flex-column">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Paquetes Recibidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">AGS/566</th>
                            <td>Javier Solis</td>
                            <td>{totalPaquetes}</td>
                        </tr>
                        {/* Button should be placed outside of the table */}
                    </tbody>
                </table>
                
            </div>
        </>
    );
}
