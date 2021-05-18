import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

import mealsImage from '../../assets/meals.jpeg';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.onCartClicked}>Card</HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
