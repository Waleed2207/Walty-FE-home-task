import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addMorePhotos } from '../../actions'; 
import { PhotoItem, StyledImage } from './style.js';

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const API_BASE_URL = process.env.REACT_APP_PIXABAY_API_URL;

const PhotosFlex = () => {
  const searchTag = useSelector((state) => state.search.currentTag);
  const photos = useSelector((state) => state.search.photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPhotos = async () => {
      if (loading) return; 
      setLoading(true);
      console.log('Fetching photos');
      try {
        const response = await axios.get(`${API_BASE_URL}?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchTag)}&image_type=photo&page=${page}&per_page=14`);
        console.log(response);
        dispatch(addMorePhotos(response.data.hits)); 
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
      setLoading(false);
    };

    if (searchTag) {
      fetchPhotos();
    }
  }, [page, searchTag, dispatch, loading]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return; 
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]); 

  return (
    <div className="photos-flex">
      {photos.slice(0, 14 + (page - 1) * 14).map((photo, index) => (
        <PhotoItem key={index}>
          <StyledImage src={photo.webformatURL} alt={photo.tags} />
        </PhotoItem>
      ))}
    </div>
  );
};

export default PhotosFlex;
