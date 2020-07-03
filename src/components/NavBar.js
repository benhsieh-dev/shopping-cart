import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

const NavBar = (props) => {

    useEffect(() => {
      getNumbers();
    }, [])

    return (
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>Dashboard</h2>
          <ul>
            <li>
              <a href="#">Stocks</a>
            </li>
            <li>
              <a href="#">Crypto Currencies</a>
            </li>
            <li className="cart">
              <a href="#">
                <ion-icon name="cart-outline"></ion-icon>Portfolio<span>{props.cartProps.cartNumbers}</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

const msp = state => ({
  cartProps: state.cartState
})

export default connect(msp, {getNumbers})(NavBar); 