import React,{Component} from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Carts'
import CartItems from './../components/CartItems';
import  *as message from './../constants/message';
import CartResult from './../components/CartResult';
import { actDeleteCart } from './../actions/index';
import { actChangeMess } from './../actions/index';
import { actUpdateProduct } from './../actions/index';


// import ProductsItems from './../components/ProductItem';
import PropTypes from 'prop-types';

class CartContainer  extends Component{
  render(){
    var {cart} = this.props
    return (
            <Cart>
              {this.showCart(cart)}
              {this.showCartTotalAmout(cart)}
            </Cart>
        );
    }
    showCart(cart){
    var result = <tr><td>{message.Msg_cart_empty}</td></tr>
      if(cart.length>0){
        result =cart.map((cart,index)=>{
          return (
          <CartItems onUpdateProduct={ this.props.onUpdateProduct } onChangeMess={this.props.onChangeMess} onDelete={this.props.onDelete}  key={index} cartItem={cart}/>
          );
        }); 
      }
      return result
    }
    showCartTotalAmout=(cart)=>{
      var result = null;
      if(cart.length>0){

         result=<CartResult cartResult={cart}/>
      }
      return result
    }
}
//propTypes kiểm tra dữ liệu từ store truyền vào đúng khôn
CartContainer.propTypes={
  cart:PropTypes.arrayOf(PropTypes.shape({
    product : PropTypes.shape({  
      id:PropTypes.number,
      name :PropTypes.string,
      image:PropTypes.string,
      Decrepsion:PropTypes.string,
      price:PropTypes.number,
      inventory:PropTypes.number,
      rating:PropTypes.number
    }),
    quantity:PropTypes.number.isRequired

  })).isRequired
}
const mapStateToProp = state=>{
  return{
      cart :state.cartReducers
  }
}
const mapDispatchToProp = (dispatch,props)=>{
    return{
      onDelete : (product)=>{
        dispatch(actDeleteCart(product))
      },
      onChangeMess:(message)=>{
        dispatch(actChangeMess(message))
      },
      onUpdateProduct:(product,quantity)=>{
        dispatch(actUpdateProduct(product,quantity))
      }
    }
}

export default connect(mapStateToProp,mapDispatchToProp) (CartContainer);
