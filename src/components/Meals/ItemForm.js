import { useRef,useState } from 'react';

import classes from './ItemForm.module.css';

const ItemForm =  (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.lengh === 0 ||
            enteredAmountNumber <=0 ||
            enteredAmountNumber > 5
        ){
            setAmountIsValid(false)
            return;
        }

        props.onAdd(enteredAmountNumber);
    }

    return (
        <form onSubmit={submitHandler}>
            <label className={classes.label} htmlFor= {props.id} >Amount</label>
            <input
            ref = {amountRef}
            className ={classes.input}
            id = {props.id} 
            type= 'number'
            min= '1'
            max = '5'
            defaultValue = '1'
            step = '1'
             />
            <button type='submit' className={classes.btn}>+ Add</button>
            {!amountIsValid && <p>please enter a valid amount (1-5)!</p>}
        </form>
    );
};

export default ItemForm;