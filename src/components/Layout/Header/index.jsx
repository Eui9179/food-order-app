import React from 'react';
import { StyledHeader } from './styles';
import mealsImage from '../../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </StyledHeader>
      <div>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;
