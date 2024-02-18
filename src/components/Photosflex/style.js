import styled from 'styled-components';

export const PhotoItem = styled.div`
  width: 250px; // Default width for larger screens
  height: 250px; // Default height for larger screens
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px; 

  @media (max-width: 820px) {
    width: 180px; 
    height: 180px; 
  }

  @media (max-width: 768px) {
    width: 180px; 
    height: 180px; 
  }

  @media (max-width: 480px) {
    width: 130px; 
    height: 130px; 
  }
  @media (max-width: 280px) {
    width: 80px; 
    height: 80px; 
    
  }

`;


export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20%;
  object-fit: cover; 
`;
