import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Making Request
  const searchApi = async searchTerm => {
    console.log('Hi');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    }
    catch (err) {
      setErrorMessage('Something went wrongs')
    }
  };

  // Call searchAPI when
  // Component is first rendered. BADCODE!
  useEffect(()=>{
    searchApi('pizza')
  },[]);


  return [searchApi,results,errorMessage];
};