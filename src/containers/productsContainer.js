import React,{Component} from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductsItems from './../components/ProductItem';
import PropTypes from 'prop-types';
import { actAddToCart } from './../actions/index'
import { actChangeMess } from './../actions/index'


class ProductsContainer  extends Component{
  render(){
    var {products}=this.props
    return (
            <Products>
              {this.showProduct(products)}
            </Products>
        );
  }
  showProduct(products){
    var result = null;
    if(products.length>0){
      result =products.map((product,index)=>{
        return <ProductsItems onChangeMess ={ this.props.onChangeMess } onAddTocart={this.props.onAddTocart} key={index} product={product} />
      })
    }
    return result
  }
}
//propTypes kiểm tra dữ liệu từ store truyền vào đúng khôn
ProductsContainer.propTypes={
  products:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number,
      name :PropTypes.string,
      image:PropTypes.string,
      Decrepsion:PropTypes.string,
      price:PropTypes.number,
      inventory:PropTypes.number,
      rating:PropTypes.number
    })
  ).isRequired,
  onChangeMess:PropTypes.func.isRequired
}
const mapStateToProp = state=>{
  return{
    products:state.products
  }
}
const mapDispatchToProps =(dispatch,props)=>{
  return{
    onAddTocart:(product)=>{
      dispatch(actAddToCart(product,1))
    },
    onChangeMess:(message)=>{
      dispatch(actChangeMess(message))
    }
  }
}

export default connect(mapStateToProp,mapDispatchToProps) (ProductsContainer);
