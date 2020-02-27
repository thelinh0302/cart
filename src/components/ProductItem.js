import React,{Component} from 'react';
import * as mess from './../constants/message';

class ProductsItems  extends Component{
  render(){
    var {product}=this.props;

    return (
      <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={product.image}  alt={product.name} className="img-fluid" 
           />
          <a href="true">
            <div className="mask waves-light waves-effect waves-light" />
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a href="true"> {product.name} </a>
            </strong>
          </h4>
          <ul className="rating">
            <li>
              {this.showRating(product.rating)}
            </li>
           
          </ul>
          <p className="card-text">
           {product.Decrepsion}
          </p>
          <div className="card-footer">
            <span className="left"> {product.price}$ </span>
            <span className="right">
              <a 
                onClick={ ()=>this.onAddTocart(product)} 
                className="btn-floating blue-gradient" 
                data-toggle="tooltip" data-placement="top"  data-original-title="Add to Cart">
                <i className="fa fa-shopping-cart" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    );

  }
    onAddTocart=(product)=>{
      this.props.onAddTocart(product);
      this.props.onChangeMess(mess.Msg_add_to_cart);
    }
    showRating(rating){
      var result=[];
       for( var i =1;i <= rating;i++ ){
              result.push( <i key={i} className="fa fa-star" />);
          }
        for( var j= 1;j<=(5-rating);j++ ){
              result.push( <i key={j+i} className="fa fa-star-o" />);
          }
      return result
    }

}

export default ProductsItems;
