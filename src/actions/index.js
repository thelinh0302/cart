import *as types from './../constants/actionTypes';

export const actAddToCart=(product,quantity)=>{
    return{
        type:types.Add_To_Cart,
        product,
        quantity
    }
}
export const actChangeMess=(message)=>{
    return{
        type:types.Change_Mess,
        message
    }
}
export const actDeleteCart=(product)=>{
    return{
        type:types.Delete_Product_In_Cart,
        product
    }
}
export const actUpdateProduct=(product,quantity)=>{
    return{
        type:types.Update_Product_Quan,
        product,
        quantity
    }
}