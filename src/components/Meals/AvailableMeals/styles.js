import styled from 'styled-components';

export const Meals = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: 2rem auto;
  padding: 1rem;
  animation: meals-appear 1s ease-out forwards;
  color: white;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
