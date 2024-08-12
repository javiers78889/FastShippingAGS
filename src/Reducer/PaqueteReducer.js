export const PaqueteReducer = (state = [], action) => {
    switch (action.type) {


        case 'addProduct':

            return action.payload;

        case 'LoadingProduct':

            return action.payload;

        case 'DeliveredProduct':
            return state.map((i) => {
                if (i.id === action.payload.id) { // Cambia `i.product.id` a `i.id`
                    return { ...action.payload };
                }else{

                    return i;
                }
            });
        case 'Pago':
            return state.map((i) => {
                if (i.id === action.payload.id) { // Cambia `i.product.id` a `i.id`
                    return { ...action.payload };
                }else{

                    return i;
                }
            });

        default:
            return state;

    }
}