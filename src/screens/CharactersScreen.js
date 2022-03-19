import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { getCharactersApi } from '../api/characters';
import CharacterList from '../screens/CharacterList';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function CharactersScreen ({navigation}) {
    const [characters, setCharacters] = useState([])
    const [filterData, setFilterData] =  useState("")
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: "Search Character",
                onChangeText: (event) => {
                    handleSearch(event.nativeEvent.text);
                },
            },
        })

        fetchCharacter();
    },[])

    const fetchCharacter = async () => {
        const response = await getCharactersApi();
        setCharacters(response);
        setLoading(false);
    };

    const handleSearch = (text) =>{
        setFilterData(text);
    };

    const filteredCharacters = useMemo (()=>
        characters.filter((character)=>{
            return character.name.toLowerCase().includes(filterData.toLowerCase());
        })
    );
 
    return (
        <SafeAreaView style={styles.container}>
            {loading ?
                <View>
                    <ActivityIndicator size={"large"} color={"#54DB33"} />
                </View>
                : 
                <View> 
                    <CharacterList characters={filteredCharacters}/>
                </View>
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
    },
    horizontal:{
        flexDirection: "row",
    //    justifyContent: "space=around",
        padding:10,
    },

})