import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTitle from '../HeaderTitle';
import { searchPhotos } from '../../actions';
import PhotosFlex from '../PhotosFlex'; 
import { Container, Input,FixedHeader,MainContent, Card, Row, Tag, ButtonTag, Button, SearchTermsContainer, Title, TermsContainer, Term } from './style.js'; 


const SearchComponent = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null); 
  const dispatch = useDispatch();
  const searchTerms = useSelector((state) => state.search.searchTerms);

  const handleSearch = () => {
  
    const trimmedInput = input.trim();
  
    if (trimmedInput) {
      if (!tags.includes(trimmedInput)) {
        const updatedTags = [...tags, trimmedInput];
        setTags(updatedTags);
        dispatch(searchPhotos(updatedTags.join('+')));
        dispatch(searchPhotos(trimmedInput));
        setInput('');
      }
      else {
        inputRef.current.setCustomValidity('Tag already exists.');
        inputRef.current.reportValidity();
      }
    } else {
      if (tags.length > 0) {
        dispatch(searchPhotos(tags.join('+')));
      } else {
        inputRef.current.setCustomValidity('Please enter at least one tag.');
      }
      inputRef.current.reportValidity();

    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Backspace" && !input ) {
      e.preventDefault(); 
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setTags(tagsCopy);
      setInput(poppedTag);
    }
  };
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  }
  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
  }
  return (
    <>
      <FixedHeader>
        <Card>
          <HeaderTitle/>
          <Row>
            <Container>
              {tags.map((tag, index) => (
                <Tag key={index} className="tag">
                  {tag}
                  <ButtonTag onClick={() => deleteTag(index)}>x</ButtonTag>
                </Tag>
              ))}
              <Input
                ref={inputRef} 
                value={input}
                onKeyDown={onKeyDown}
                onChange={onChange}
                placeholder="Search for images"
                
              />
            </Container>
            <Button onClick={handleSearch}>Search</Button>
          </Row>
          <SearchTermsContainer>
            <Title>Last 3 Searches</Title>
              <TermsContainer>
                {searchTerms.map((term, index) => (
                  <Term key={index}>{term}</Term>
                ))}
              </TermsContainer>
          </SearchTermsContainer>
        </Card>
      </FixedHeader>
      <MainContent>
        <PhotosFlex />
      </MainContent>
    </>
  );
};

export default SearchComponent;