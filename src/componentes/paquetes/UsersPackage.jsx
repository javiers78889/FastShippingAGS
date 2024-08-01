

export const UsersPackage = ({ paquetes, ValorLogueo, generatePDF, Login,pago }) => {
    return (
        paquetes.filter(pack => pack.usuario === ValorLogueo).map(pack => (
            <tr key={pack.id}>
                <th scope="row">{pack.id}</th>
                <td>{pack.tracking}</td>
                <td>{pack.peso}</td>
                <td>${pack.precio}</td>
                <td>{pack.status}</td>
                <td>{pack.fecha}</td>
                {Login.user[0].usuario === 'admin' ? ('') :
                    pack.pago === "Pendiente ⬜" ? (<td><button type="button" className="btn btn-warning" onClick={() => pago(pack.id)}>Pagar</button></td>) : <td><p>Pagado ✅</p></td>

                }


                <td><button type="button" className="btn btn-primary" onClick={() => generatePDF(pack.id)}>Ver Recibo</button></td>
            </tr>
        ))

    )

}
