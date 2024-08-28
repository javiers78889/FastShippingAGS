import { findAllUsers } from "../auth/services/Users";
import fastShippingImg from '../img/FAST_SHIPPING_AGS.png';
import jsPDF from "jspdf";

export const usePDF = (paquetes) => {
    const generatePDF = async (pacId) => {
        const doc = new jsPDF();

        // Definir la estructura de la tabla
        const tableData = paquetes.filter(pack => pack.id === pacId);
        console.log(tableData)

        if (tableData.length === 0) {
            console.log("No se encontró el paquete con el id: ", pacId);
            return;
        }


        const tableColumns = [
            { header: 'Id', dataKey: 'id' },
            { header: 'Tracking ID', dataKey: 'tracking' },
            { header: 'Peso', dataKey: 'peso' },
            { header: 'Precio $', dataKey: 'precio' },
            { header: 'Status', dataKey: 'status' },
            { header: 'Fecha de Registro', dataKey: 'fecha' }
        ];

        const pack = tableData[0];
        const usuarios = await findAllUsers();
        const filtrado = usuarios.filter(u => u.usuario === pack.usuario);
        const formatDate = (dateString) => {
            const fecha = new Date(dateString);
            const anio = fecha.getFullYear();
            const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // getMonth() devuelve un índice de 0 a 11
            const dia = String(fecha.getDate()).padStart(2, '0'); // getDate() devuelve el día del mes

            return `${anio}-${mes}-${dia}`;
        };

        const fechaFormateada = formatDate(pack.fecha);

        // Título del documento
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(`N° DE FACTURA FS-${pack.id}`, 10, 10);

        doc.text(`FECHA ${fechaFormateada}`, 70, 10);
        doc.addImage(fastShippingImg, 'PNG', 165, 10, 20, 15);
       
      

        // Datos de facturación
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text("FACTURAR A", 10, 30);
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("FAST SHIPPING AGS", 150, 35);
        doc.setFont("helvetica", "normal");
        doc.text(`${filtrado[0].nombre}`, 10, 40);
        doc.text("PANAMA OESTE, LA\n CHORRERA,VALLE DORADO", 150, 45);
        doc.text("\nCALLE 12 OFICINA AK45", 150, 50);
        doc.text("\nTEL: 6112-5919", 150, 55);
        doc.text("\nCORREO: \nfastshippingags507@gmail.com", 150, 60);


        // Tabla
        doc.autoTable({
            startY: 80,
            head: [['LIBRAS.', 'DESCRIPCIÓN', 'PRECIO UNITARIO', 'IMPORTE']],
            body: tableData.map(pack => [
                pack.peso, // Cantidad
                pack.tracking, // Descripción
                `$ ${pack.precio}`, // Precio unitario
                (pack.tarifas * 1).toFixed(2) // Importe
            ]),
            headStyles: {
                fillColor: [0, 0, 0], // Fondo negro para encabezados
                textColor: [255, 255, 255], // Texto blanco para encabezados
                fontStyle: 'bold'
            },

        });

        // Total
        const finalY = doc.previousAutoTable.finalY || 70;
        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.text("TOTAL FACTURA $ " + pack.precio + " USD", 15, finalY + 20);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        // Condiciones y forma de pago
        doc.setFont("helvetica", "bold");
        doc.text("CONDICIONES Y FORMA DE PAGO", 15, finalY + 40);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text("20 DIAS CALENDARIO LIBRE DE ALMACENAJE DESPUES DE LA FECHA DE FACTURA.", 15, finalY + 50);
        doc.text("$1 DOLARES POR DIA DE RECARGO", 15, finalY + 55);

        // Datos de cuenta bancaria
        doc.setFontSize(9);
        doc.text("FAST SHIPPING AGS", 15, finalY + 70);
        doc.text("04-72-98-303943-0", 15, finalY + 75);
        doc.text("CTA AHORRO", 15, finalY + 80);
        doc.text("BANCO GENERAL.", 15, finalY + 85);
        doc.text("YAPPY COMERCIAL:", 15, finalY + 90);
        doc.text("FAST SHIPPING AGS", 15, finalY + 95);

        // Guardar el PDF con un nombre específico
        doc.save('factura.pdf');
    };
  return (
    generatePDF
   
  )
}
