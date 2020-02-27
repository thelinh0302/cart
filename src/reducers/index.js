import { combineReducers } from 'redux';
import products from './products';
import cartReducers from './cartReducers'
import changeMess from './changeMess';
const appReducers = combineReducers({
    products,
    cartReducers,
    changeMess
})
export default appReducers;