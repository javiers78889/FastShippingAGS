export const LoginReducer=(state=[],action)=>{
    switch (action.type) {
        case 'login':
            return{
                isAuth:true,
                user:action.payload,
            };
        case 'logout':
            
            return{
                isAuth:false,
                user:'',
            };
    
       
    }


}