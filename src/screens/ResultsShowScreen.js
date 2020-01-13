import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image ,ScrollView } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(JSON.stringify(result));
  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect(()=>{
    getResult(id);
  },[]);

  if(!result) return null;


  return (
    <View style={{flex:1}}>   
      <Text>Restaurant : {result.name}</Text>
      <Text>Phone : {result.display_phone}</Text>
      <Text>Rating : {result.rating} </Text>
        <ScrollView>
        <FlatList 
          horizontal={false}
          keyExtractor={(photo)=>photo}
          data={result.photos}
          renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}}/>
          }}
        />
        </ScrollView>
    </View>
  );
}

const styles=StyleSheet.create({
  image:{
    height:200,
    width:300
  }
})


export default ResultsShowScreen;