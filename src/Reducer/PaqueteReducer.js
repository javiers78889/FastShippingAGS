export const PaqueteReducer = (state = [], action) => {
    switch (action.type) {


        case 'addProduct':

            return [...state, action.payload];

        case 'DeliveredProduct':
            return state.map((i) => {
                if (i.id === action.payload.id) { // Cambia `i.product.id` a `i.id`
                    return {
                        ...i, // Mantén el resto de las propiedades
                        status: 'Entregado ✅' , pago: 'Pagado ✅'// Cambia el status a "Entregado"
                    };
                }
                return i;
            });
        case 'Pago':
            return state.map((i) => {
                if (i.id === action.payload.id) { // Cambia `i.product.id` a `i.id`
                    return {
                        ...i, // Mantén el resto de las propiedades
                        pago: 'Pagado ✅' // Cambia el status a "Entregado"
                    };
                }
                return i;
            });

        default:
            return state;

    }
}