import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import ItemForm from './ItemForm'
import classes from './ListItem.module.css';

const ListItem = props => {
    const CartCtx = useContext(CartContext);
    const addHandler = amount => {
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }


    return (
        <li className={classes.item}>
            <div>
                <span className={classes.name}>{props.name}</span>
                <span className={classes.description}>{props.description}</span>
                <span className={classes.price}>{`$${props.price}`}</span>
            </div>
            <div>
                <ItemForm id ={props.id} onAdd ={addHandler}/>        
            </div>
        </li>
    )
}

export default ListItem;