import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos } from '../../actions';
import PhotosFlex from '../Photosflex'; 
import { Container, Input,FixedHeader,MainContent,FixedBar, FlexColmn, Flex, Tag,ButtonTag, Button, SearchTermsContainer, Title, TermsContainer, Term } from './style.js'; 

const SearchComponent = () => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null); 
  const dispatch = useDispatch();
  const searchTerms = useSelector((state) => state.search.searchTerms);

  const handleSearch = () => {
    if (tags.length === 0) {
      inputRef.current.setCustomValidity('Please enter at least one tag.');
      inputRef.current.reportValidity();
    } else {
      inputRef.current.setCustomValidity('');
      console.log(tags.join(' '));
      dispatch(searchPhotos(tags.join(' '))); 
    }
  };
  useEffect(() => {
    if (input.endsWith(' ') && input.trim() !== '') {
      const newTag = input.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setInput('');
      } else {
        setInput('');
      }
    }
  }, [input, tags]);
  
  const onKeyDown = (e) => {
    if (e.key === "Backspace" && !input && tags.length) {
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
        <FlexColmn >
          <Flex>
              <h1>Walty Photos Engine</h1>
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
            </Flex>
            <FixedBar>
            <SearchTermsContainer>
              <Title>Last 3 Searches:</Title>
                <TermsContainer>
                  {searchTerms.map((term, index) => (
                    <Term key={index}>{term}</Term>
                  ))}
              </TermsContainer>
          </SearchTermsContainer>
          </FixedBar>
        </FlexColmn>
        </FixedHeader>
        <MainContent>
           <PhotosFlex />
       </MainContent>
    </>
  );
};

export default SearchComponent;
