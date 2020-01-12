import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            style={styles.inputStyle}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#D0D0D0',
        height:50,
        borderRadius:20,
        marginHorizontal:15,
        marginTop:10,
        flexDirection:'row'
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        alignSelf:'center',
        marginHorizontal:15,
        fontSize:30
    }
});

export default SearchBar;