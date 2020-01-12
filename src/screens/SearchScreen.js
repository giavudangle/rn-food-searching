import React, { useState ,useEffect } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  // useState Declare
  const [term, setTerm] = useState('');
  const [results,setResults]= useState([]);
  const [errorMessage,setErrorMessage]=useState('');

  // Making Request
  const searchApi = async () => {
    console.log('Hi');
    try {
      const response= await yelp.get('/search',{
        params:{
          limit:30,
          term:term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    }
    catch (err){
      setErrorMessage('Something went wrongs')
    }
  };

  // Call searchAPI when
  // Component is first rendered. BADCODE!
  

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}       
      />
      {errorMessage ? <Text>{errorMessage}</Text>:null}
      <Text>We found {results.length} results.</Text>
    </View>
  );
}

export default SearchScreen;