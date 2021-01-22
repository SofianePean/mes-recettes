import React from 'react';
import { View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

const SearchBarInput = ({ inputValue, changeFieldValue, navigation }) => {

    return(
        <View>
            <SearchBar
                containerStyle={{backgroundColor: 'white',  borderRadius: 5, padding: 0, marginTop: 5, marginLeft:6, marginRight:6, marginBottom:5}}
                placeholder="Rechercher..."
                onChangeText={(search) => changeFieldValue(search)}
                value={inputValue}
            />
        </View>
    )
};

export default SearchBarInput;