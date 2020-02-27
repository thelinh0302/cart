import React,{Component} from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/productsContainer';
// import Message from './components/Message';
import Footer from './components/Footer';
import CartContainer from './containers/cartContainer';
import MessageContainers from './containers/messageContainers';


class App extends Component {
  render(){
    return(
      <div>
          <Header/>
          <main id="mainContainer">
            <div className="container">
                <ProductsContainer/>
                <MessageContainers />
                <CartContainer/>
            </div>
          </main>
          <Footer/>
      </div>
    )
  }
}

export default App;
