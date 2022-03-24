import { Fragment } from "react"
import mealsImage from "../../../assets/images/meals.jpg"
import classes from './header.mosule.css'

const Header = ( props ) => {
  return (
    <Fragment>
      <header>
        <h1 className={ classes.header }>react food order</h1>
        <button>cart</button>
      </header>
      <div className={ classes[ 'main-image' ] }>
        <img src={ mealsImage } alt="a table full of food" />
      </div>
    </Fragment>
  );
};
export default Header;
