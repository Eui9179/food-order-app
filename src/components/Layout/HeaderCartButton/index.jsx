import React from 'react';
import { Button, Icon, Badge } from './styles';
import CartIcon from '../../Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <>
      <Button>
        <Icon>
          <CartIcon />
        </Icon>
        <span>Your Cart</span>
        <Badge>3</Badge>
      </Button>
    </>
  );
};

export default HeaderCartButton;
