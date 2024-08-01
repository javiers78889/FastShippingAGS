

export const AdminPackage = ({ paquetes, generatePDF, Entregar }) => {
    return (
        paquetes.map(pack => (
            <tr key={pack.id}>
                <th scope="row">{pack.id}</th>
                <td>{pack.tracking}</td>
                <td>{pack.peso}</td>
                <td>${pack.precio}</td>
                <td>{pack.status}</td>
                <td>{pack.pago}</td>
                <td>{pack.fecha}</td>
                {pack.status === 'Pendiente ⬜' ? (

                    <td><button type="button" className="btn btn-success " onClick={() => Entregar(pack.id)}>Entregar<svg className="ms-1 bi bi-send" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg></button></td>


                ) : ''}
                <td><button type="button" className="btn btn-primary" onClick={() => generatePDF(pack.id)}>Ver Recibo</button></td>
            </tr>
        ))

    )
}
