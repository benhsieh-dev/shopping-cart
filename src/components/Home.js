import React from 'react';
import mooncake from '../images/mooncake.jpg';
import chocolateTriangle from '../images/Chocolate Triangle Cake.jpg';
import coffeeTriangle from '../images/Coffee Triangle Cake.jpg';
import taroRoll from '../images/Taro Roll.jpg';
import {connect} from 'react-redux';
import { addCart } from '../actions/addAction';

const Home = (props) => {
  console.log(props); 
    return (
      <div className="container">
        <div className="image">
          <img src={mooncake} alt="mooncake" />
          <h3>Mooncake</h3>
          <h3>$4.50</h3>
          <a onClick={props.addCart} className="addToCart cart1" href="#">
            Add to cart
          </a>
        </div>
        <div className="image">
          <img src={chocolateTriangle} alt="chocolate triangle cake" />
          <h3>Chocolate Triangle Cake</h3>
          <h3>$1.75</h3>
          <a onClick={props.addCart} className="addToCart cart2" href="#">
            Add to cart
          </a>
        </div>
        <div className="image">
          <img src={coffeeTriangle} alt="coffee triangle" />
          <h3>Coffee Triangle</h3>
          <h3>$1.75</h3>
          <a onClick={props.addCart} className="addToCart cart3" href="#">
            Add to cart
          </a>
        </div>
        <div className="image">
          <img src={taroRoll} alt="taro roll" />
          <h3>Taro Roll</h3>
          <h3>$1.75</h3>
          <a onClick={props.addCart} className="addToCart cart4" href="#">
            Add to cart
          </a>
        </div>
      </div>
    );
}

export default connect(null, {addCart})(Home); 