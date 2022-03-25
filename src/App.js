import './App.css'
import { Fragment, useState } from "react";
import Header from "./shared/components/layout/Header";
import Meals from "./shared/components/meals/Meals";
import Cart from './shared/components/cart/Cart';
import { Scrollbar } from 'smooth-scrollbar-react';


function App () {
    const [ cartIsShown, setCartIsShown ] = useState( false )

    const showCartHandler = () => {
        setCartIsShown( true )
    }
    const hideCartHandler = () => {
        setCartIsShown( false )
    }


    return (
        <Scrollbar
            plugins={ {
                overscroll: {
                    effect: 'bounce',
                },
            } }>
            <div className='list-data'>
                <Fragment>
                    { cartIsShown && <Cart onClose={ hideCartHandler } /> }
                    <Header onShowCart={ showCartHandler } />
                    <main>
                        <Meals />
                    </main>
                </Fragment>
            </div>
        </Scrollbar>
    );
}

export default App;
