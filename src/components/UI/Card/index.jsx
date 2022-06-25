import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 14px;
  background-color: #383838;
`;

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
