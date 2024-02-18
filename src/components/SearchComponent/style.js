import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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
  justify-content: center; // Aligns the term boxes to the start of the container
  gap: 10px; // Creates space between each term box
`;
export const Term = styled.div`
  padding: 4px 0;
`;
