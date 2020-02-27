import * as mess from './../constants/message';
import * as types from './../constants/actionTypes'
var initialState = mess.Msg_welcome
const changeMess = (state=initialState,action)=>{
    switch(action.type){
        case types.Change_Mess:
            return action.message
        default:return state
    }
}
export default changeMess