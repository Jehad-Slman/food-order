import { Fragment } from "react";

import CartBtn from "../Cart/CartBtn";
import foodImage from '../../assets/food.jpg'
import classes from './Header.module.css'

const Header = props => {
    return (
        <Fragment>
            <header className={classes.head}>
                <div>
                    <h1>Food Order</h1>
                    <CartBtn onClick={props.onShowCart} />
                </div>
            </header>
            <div className={classes['img-container']}>
                <img className={classes.img} src={foodImage} alt="food"/>
            </div>
        </Fragment>
    )
}

export default Header;