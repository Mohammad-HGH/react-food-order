import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'

/**
 * 
 * @param {price,description,name} props 
 * @returns 
 */


const MealItem = ( props ) => {
    // Gives us the price up to two decimal places
    const price = `$${ props.price.toFixed( 2 ) }`

    return <li className={ classes.meal }>
        <div>
            <h3>{ props.name }</h3>
            <div className={ classes.description }>{ props.description }</div>
            <div className={ classes.price }>{ price }</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
};

export default MealItem;