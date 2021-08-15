import {useState} from 'react';
import Header from "./components/Layout/Header";
import MealList from "./components/Meals/MealList";
import Cart from "./components/Cart/Cart";
import reactDom from "react-dom";
import CartContextProvider from './store/CartContextProvider';

import classes from './App.module.css';
function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartContextProvider>
      <div className={classes.app}>
        {showCart && reactDom.createPortal(<Cart 
        onHideCart={hideCartHandler}
        />,
        document.getElementById('overlay'))}
        <Header onShowCart={showCartHandler} />
        <MealList />
      </div>
    </CartContextProvider>
    )
}

export default App;
