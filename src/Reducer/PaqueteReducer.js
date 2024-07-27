export const PaqueteReducer = (state = [], action) => {
    switch (action.type) {
        case 'addProduct':

            return [...state,action.payload];
       
    }
}