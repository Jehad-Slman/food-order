import { useContext } from 'react';
import CartContext from '../../store/cart-context'
import {FaShoppingCart} from 'react-icons/fa'
import classes from './CartBtn.module.css';

const CartBtn = props => {
   const catrCtx = useContext(CartContext);

   const numOfItems = catrCtx.items.reduce((num,item) => {
       return num + item.amount;
   },0)
    return (
        <button onClick={props.onClick} className={classes.btn}>
            <span><FaShoppingCart/></span>
            <span>Your cart</span>
            <span className={classes.num}>{numOfItems}</span>
        </button>        
    );
}

export default CartBtn;