import React,{Component} from 'react';
import  * as mess from './../constants/message'
class CartItems extends Component {
  render(){
    var {cartItem}=this.props;
    var {quantity} = cartItem
    return(
      <tr>
      <th scope="row">
        <img src= { cartItem.product.image}  alt={cartItem.product.image} />
      </th>
      <td>
        <h5>
          <strong> {cartItem.product.name} </strong>
        </h5>
      </td>
      <td> {cartItem.product.price} $</td>
      <td className="center-on-small-only">
        <span className="qty"> {quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            onClick={ ()=> this.updateQuantity(cartItem.product,cartItem.quantity-1) } 
            className="btn btn-sm btn-primary
            btn-rounded waves-effect waves-light">
            < a href="true">—</a>
          </label>
          <label 
            onClick={ ()=> this.updateQuantity(cartItem.product,cartItem.quantity + 1) } 
            className="btn btn-sm btn-primary
            btn-rounded waves-effect waves-light">
            <a href="true">+</a>
          </label>
        </div>
      </td>
      <td> {this.subTotal(cartItem.product.price,cartItem.quantity)} $</td>
      <td>
        <button 
          onClick = { ()=>this.onDelete(cartItem.product) } 
          type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"  data-original-title="Remove item">
          X
        </button>
      </td>
    </tr>
    )
  }
  updateQuantity =(product,quantity)=>{
    if(quantity>0){
    this.props.onUpdateProduct(product,quantity)
    this.props.onChangeMess(mess.Msg_up_cart_success);

    }
  }
  onDelete =(product)=>{
    this.props.onDelete(product);
    this.props.onChangeMess(mess.Msg_dele_cart_succ);
  }
  subTotal=(price,quantity)=>{
    return price*quantity
  }
}

export default  CartItems