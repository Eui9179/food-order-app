import React from 'react';
import HeaderCartButton from '../HeaderCartButton';
import { StyledHeader, MainImage } from './styles';
import mealsImage from '../../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </StyledHeader>
      <MainImage>
        <img
          className='main-image'
          src={mealsImage}
          alt='A table full of delicious food!'
        />
      </MainImage>
    </>
  );
};

export default Header;
