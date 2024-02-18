import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos } from '../../actions';
import PhotosFlex from '../Photosflex'; 
import { Container, Input, Button, SearchTermsContainer, Title, TermsContainer, Term } from './style.js'; 

const SearchComponent = () => {
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  const searchTerms = useSelector((state) => state.search.searchTerms);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchPhotos(tag));
  };

  return (
    <form onSubmit={handleSearch} >
        <Container>
          <Input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Search for images" required />
          <Button type='submit'>Search</Button>
        </Container>
        <SearchTermsContainer>
          <Title>Last 3 Searches:</Title>
            <TermsContainer>
              {searchTerms.map((term, index) => (
                <Term key={index}>{term}</Term>
              ))}
          </TermsContainer>
      </SearchTermsContainer>
      <PhotosFlex />
    </form>
  );
};

export default SearchComponent;
