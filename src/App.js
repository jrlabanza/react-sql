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
    const {product} = this.state;
    fetch(`http://localhost:3000/products/add?handlerID=${product.handlerID}&testerID=${product.testerID}`)
    .then(response => response.json())
    .then(this.getProducts)
    .catch(err => console.error(err))
  }

renderProduct = ({ id, handlerID, testerID, description, remarks}) => <div key={id}>{id}{' '}{handlerID}{' '}{remarks}</div>

  render(){
    const { products, product } = this.state;
    return (
      <div className="App">
        {products.map(this.renderProduct)}

        <div>
          <input
            value={product.handlerID}
            onChange={e => this.setState({ product:{ ...product, handlerID: e.target.value }})} />
          <input
            value={product.testerID}
            onChange={e => this.setState({ product:{ ...product, testerID: e.target.value }})} />
          <button onClick={this.addProduct}>ADD PRODUCT</button>
        </div>
      </div>
    );
  }
}
//https://www.youtube.com/watch?v=HPIjjFGYSJ4 continue at home

export default App;
