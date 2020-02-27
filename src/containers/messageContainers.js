import React,{Component} from 'react';
import { connect } from 'react-redux';
// import ProductsItems from './../components/ProductItem';
import PropTypes from 'prop-types';
import Message from './../components/Message'

class MessageContainers  extends Component{
  render(){
    var {message} = this.props
    return (
            <Message message = { message} />
        );
    }
}
//propTypes kiểm tra dữ liệu từ store truyền vào đúng khôn
MessageContainers.propTypes={
  message:PropTypes.string.isRequired
}
const mapStateToProp = state=>{
  return{
      message :state.changeMess
  }
}

export default connect(mapStateToProp,null) (MessageContainers);
