import * as types from './../constants/actionTypes'
var data=JSON.parse(localStorage.getItem('Cart'));
var initialState = data ? data:[];

const cart = (state=initialState,action)=>{
    var {product,quantity} = action
    var index =-1;
    switch(action.type){
        case types.Add_To_Cart:
            index = findProductCart(state , product);
            if(index !==-1){
                state[index].quantity +=quantity
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('Cart',JSON.stringify(state));
            // console.log(action)
         return [...state]
         case types.Delete_Product_In_Cart:
            index = findProductCart(state,product);
            if(index !== -1){
                state.splice(index,1);
            }
             localStorage.setItem('Cart',JSON.stringify(state));
             return [...state]
             case types.Update_Product_Quan:
                 index=findProductCart(state,product);
                 if(index !==-1){
                     state[index].quantity=quantity
                 }
                 localStorage.setItem('Cart',JSON.stringify(state));
                 return[...state]
        default:return [...state]
    }
}
var findProductCart = (cart,product)=>{
    var index=-1;
    if(cart.length>0){
        for(var i = 0 ;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index = i;
                break
            }
        }
    }
    return index;
}
export default cart