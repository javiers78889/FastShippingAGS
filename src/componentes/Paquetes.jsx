import jsPDF from "jspdf";
import 'jspdf-autotable';
import { AdminPackage } from "./paquetes/AdminPackage";
import { UsersPackage } from "./paquetes/UsersPackage";

export const Paquetes = ({ paquetes, Login, Entregar, pago }) => {

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


    const ValorLogueo = (Login.user && Login.user.length > 0) ? Login.user[0].usuario : '';

    return (
        <div className="container my-2">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Tracking ID</th>
                        <th scope="col">Peso(lb)</th>
                        <th scope="col">Precio($)</th>
                        <th scope="col">Status</th>
                        {Login.user[0].usuario === 'admin' ? (<th scope="col">Pago</th>):''}
                        <th scope="col">Fecha de Vencimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {Login.user[0].usuario === 'admin' ? (
                        <AdminPackage Entregar={Entregar} paquetes={paquetes} generatePDF={generatePDF} Login={Login} />


                    ) :
                        <UsersPackage paquetes={paquetes} ValorLogueo={ValorLogueo} pago={pago} generatePDF={generatePDF} Login={Login} />



                    }
                </tbody>
            </table>
        </div>
    )
}
