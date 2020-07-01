import React from 'react';

const Home = () => {
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
                <ion-icon name="cart-outline"></ion-icon>Portfolio<span>0</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Home; 