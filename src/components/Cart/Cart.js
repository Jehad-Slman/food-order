import { useContext } from "react";
import CartContext from "../../store/cart-context";
import OverLay from "../Layout/OverLay";
import CartItem from "./CartItem";
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext)
    const addHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const removeHandler = id => {
        cartCtx.onDelete(id)
    }

    return (
        <OverLay total = {cartCtx.totalAmount} onClick={props.onHideCart}>
            <ul className={classes.list}>
               {cartCtx.items.map(item => {
                   return <CartItem 
                   onAdd ={addHandler.bind(null, item)}
                   onRemove= {removeHandler.bind(null, item.id)}
                   key ={item.id}
                   name = {item.name}
                   price = {item.price}
                   amount = {item.amount}
                   />
               }) }
            </ul>
        </OverLay>
    )
}

export default Cart;