import React from 'react';
import {View,Text,StyleSheet,Image } from 'react-native';


const ResultsDetail = ({results}) => {
  return (
    <View style={styles.container}>
      <Image 
      source={{uri:results.image_url }}
      style={styles.image}
      />
      <Text style={styles.name}>{results.name}</Text>
      <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    marginLeft:15
  },
  image:{
    width:200,
    height:160,
    borderRadius:15,
    marginBottom:15
  },
  name:{
    fontWeight:'bold',
    fontSize:16
  }
});

export default ResultsDetail;