import {Fragment} from 'react';

import Card from '../UI/Card';
import ListItem from './ListItem';
import classes from './MealList.module.css';

const meals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specially',
        price: 16.50
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, row, mealy',
        price: 12.99
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99
    }
]

const MealList =  () => {

    const items = meals.map(meal => {
        return (<ListItem 
        key = {meal.id}
        id={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price} 
        />)
    })

    return (
        <Fragment>
            <section className={classes.sec}>
                <h2>Delicious Food, Delivered To You</h2>
                <p>Chose your favorite mealfrom out broad selection
                     of available meals and enjoy the delicious lunch 
                     or dinner at home0</p>
                <p>All our meals are coocked high-quality ingredients,
                    just-in-time and of course byexperienced chefs
                </p>
            </section>
            <Card>
                <ul className={classes.list}>
                    {items}
                </ul>
            </Card>
        </Fragment>
    )
}

export default MealList