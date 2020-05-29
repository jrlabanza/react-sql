import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    products: [],
    product: {
      handlerID: 'sample product',
      testerID:20
    }
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = _ => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data}))
    .catch(err=> console.error(err))
  }

  addProduct = _ => {

  }

renderProduct = ({ id, handlerID, testerID, description, remarks}) => <div key={id}>{handlerID}{' '}{remarks}</div>

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        {products.map(this.renderProduct)}

        <div>
          <input/>
        </div>
      </div>
    );
  }
}
//https://www.youtube.com/watch?v=HPIjjFGYSJ4 continue at home

export default App;
