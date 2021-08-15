import classes from './CartItem.module.css';

const CartItem = props => {

    return (
        <li className={classes.item}>
            <div>
                <span className={classes.name}>{props.name}</span>
                <span className={classes.price}>{props.price}</span>
                <span className={classes.amount}>{props.amount}</span>
            </div>
            <div>
                <span className={classes.total}>{`$${(props.price*props.amount).toFixed(2)}`}</span>
                <button onClick={props.onRemove} className={classes.btn}>-</button>
                <button onClick={props.onAdd} className={classes.btn}>+</button>
            </div>
        </li>
    )
}

export default CartItem;