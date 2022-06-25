import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  top: 0;
  left: 0;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1.3rem 0 1.3rem;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  .main-image {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;
