import { Fragment } from "react";
import Card from "../UI/Card";
import classes from './OverLay.module.css';
const OverLay = props => {

    return (
        <Fragment>
            <div onClick={props.onClick} className={classes.backdrop}></div>
            <Card className={classes.cart}>
                {props.children}
                <div className={classes.total}>
                    <h2>Total Amount:</h2>
                    <span>{`$${props.total.toFixed(2)}`}</span>
                </div>
                <div className={classes.action}>
                    <button onClick={props.onClick} className={classes.close}>close</button>
                    <button className={classes.order}>Order</button>
                </div>
            </Card>
        </Fragment>
    )
}

export default OverLay;