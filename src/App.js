import './App.css'
import { Fragment } from "react";
import Header from "./shared/components/layout/Header";
import Meals from "./shared/components/meals/Meals";
import Cart from './shared/components/cart/Cart';
import { Scrollbar } from 'smooth-scrollbar-react';



function App () {
  return (
    <Scrollbar
      plugins={ {
        overscroll: {
          effect: 'bounce',
        },
      } }>
      <div className='list-data'>
        <Fragment>
          <Cart/>
          <Header />
          <main>
            <Meals />
          </main>
        </Fragment>
      </div>
    </Scrollbar>
  );
}

export default App;
