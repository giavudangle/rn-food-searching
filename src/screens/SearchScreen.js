import React, { useState ,useEffect } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  // useState Declare
  const [term, setTerm] = useState('');
  const [searchApi,results,errorMessage] = useResults();
  
  const filterResultsByPrice = (price) => {
    return results.filter(result =>{
      return result.price == price;
    });
  } 
  
  
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}       
      />
      {errorMessage ? <Text>{errorMessage}</Text>:null}
      <Text>We found {results.length} results.</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Most Picking"/>
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>

    </View>
  );
}



export default SearchScreen;