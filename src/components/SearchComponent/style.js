import styled from 'styled-components';

const headerHeight = '300px';

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  height: ${headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const MainContent = styled.div`
  margin-top: ${headerHeight}; 
  padding-top: 1rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
`; 

export const Flex = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

`;


export const Container = styled.div`
  display: flex;
  background-color: white;
  overflow: scroll;
  width: 300px;
  height: 50px;
  margin: 5px;
  padding-left: 14px;  
  border: 0.5px grey solid;
  border-radius: 5px;
  color: black

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
  font-family: monospace;
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
  font-family: monospace;
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
  font-family: monospace;
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

export const SearchTermsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
  color: white;
  font-family: monospace;

`;
export const Headertitle = styled.h1`
  color: #431010;
  font-family: monospace;
`;
export const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Term = styled.div`
  background-color: #f89797;
  color: white;
  font-family: monospace;
  min-width: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  margin-right: 10px;
  font-size: 16px;
  white-space: nowrap;
`;



export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;