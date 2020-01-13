import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'

import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity 
              onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}
            >
            <ResultsDetail results={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:15
  },
  container:{
    marginBottom:15
  }
});

export default withNavigation(ResultsList);