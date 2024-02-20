import styled from 'styled-components';

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  height: 250px;
`;

export const MainContent = styled.div`
  margin-top: [Height of your FixedHeader]; 
  padding-top: 1rem;
`;

export const FlexColmn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`; 

export const Flex = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

`

export const Container = styled.div`
  display: inline-flex;
  overflow: scroll;
  width: 80%;
  height: 50px;
  margin: 5px;
  padding-left: 14px;  
  border: 0.5px grey solid;
  border-radius: 5px;
  color: black
  flex: 1 0 300px;

`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  min-width: 70%;
  border: none;
  border-radius: 5px;
  padding: 14px;
  padding-left: 14px;
  &:focus {
    outline: none;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  margin: 7px 0;
  margin-right: 10px;
  padding: 0 10px;
  padding-right: 5px;
  border: 1px solid orange;
  border-radius: 5px;
  background-color: orange;
  white-space: nowrap;
  color: white;
`;
export const ButtonTag = styled.button`
  display: flex;
  padding: 6px;
  border: none;
  background-color: unset;
  cursor: pointer;
  color: white;

`

export const Button = styled.button`
  padding: 8px 16px;
  width: 120px;
  height: 50px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 10px;
  background-image: linear-gradient(to right, #007bff, #0056b3);
  cursor: pointer;
  outline: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-image: linear-gradient(to right, #9d50bb, #6e48aa);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.24), 0 4px 8px rgba(0,0,0,0.31);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.24), 0 2px 4px rgba(0,0,0,0.31);
  }
`;

export const FixedBar = styled.div`
  position: fixed;
  margin-top: 330px;
  left: 0;
  width: 100%;
  background: white; 
  z-index: 100; 
  padding: 10px 0; 
`;
export const SearchTermsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
`;
export const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Term = styled.div`
  background: radial-gradient(circle at left top, rgba(255, 50, 80, 0.8) 0%, rgba(255, 50, 80, 0) 100%),
              linear-gradient(to left, rgb(255, 50, 80), rgb(255, 120, 0), rgb(255, 150, 100));
  color: white;
  min-width: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  margin-right: 10px;
  font-size: 0.9rem;
  white-space: nowrap;
`;


