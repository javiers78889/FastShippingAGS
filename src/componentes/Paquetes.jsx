import jsPDF from "jspdf";
import 'jspdf-autotable';

export const Paquetes = ({ paquetes }) => {


    const generatePDF = (pacId) => {
        const doc = new jsPDF();

        // Definir la estructura de la tabla
        const tableData = paquetes.filter(pack => pack.id === pacId);

        console.log("Paquete seleccionado:");
        console.log(tableData);  // Aquí debería imprimirse el paquete específico

        const tableColumns = [
            { header: 'Id', dataKey: 'id' },
            { header: 'Tracking ID', dataKey: 'tracking' },
            { header: 'Peso', dataKey: 'peso' },
            { header: 'Precio $', dataKey: 'precio' },
            { header: 'Status', dataKey: 'status' },
            { header: 'Fecha de Vencimiento', dataKey: 'fecha' }
        ];
        const pack = tableData[0];
        doc.text("Facturar a: " + pack.usuario, 10, 10)

        doc.autoTable({
            head: [tableColumns.map(col => col.header)],
            body: tableData.map(pack => [
                pack.id,
                pack.tracking,
                pack.peso,
                pack.precio,
                pack.status,
                pack.fecha
            ]),
            startY: 30, // Ajusta según sea necesario
            theme: 'striped',
        });

        // Guardar el PDF con un nombre específico
        doc.save('ejemplo.pdf');
    };

    return (

        <div className="container my-2">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tracking ID</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Status</th>
                        <th scope="col">Fecha de Vencimiento</th>

                    </tr>
                </thead>
                <tbody>
                    {paquetes.map(pack => (
                        <tr key={pack.id}>
                            <th scope="row">{pack.id}</th>
                            <td>{pack.tracking}</td>
                            <td>{pack.peso}</td>
                            <td>${pack.precio}</td>
                            <td>{pack.status}</td>
                            <td>{pack.fecha}</td>
                            <td><button type="button" className="btn btn-primary" onClick={() => generatePDF(pack.id)}>Ver Recibo</button></td>
                        </tr>
                    ))}


                </tbody>
            </table>

        </div>
    )
}
