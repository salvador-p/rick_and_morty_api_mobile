import {
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableWithoutFeedback
}   from 'react-native'
import React, { useState, useEffect } from "react";
import { getEpisodeName } from "../api/characters";

export default function Character({ character, navigation, props }) {
    const [episode, setEpisode] = useState();

    const fetchEpisodeData = async () => {
        const request = await getEpisodeName(character.episode[0]);
        setEpisode(request);
    };

    useEffect(() => {
        fetchEpisodeData();
    });

    return (
        <TouchableWithoutFeedback 
        onPress={() => {
            this.props.navigation.navigate("CharacterDetails", {character})
            }}
        >
            <View style={styles.character}>
                <View style={styles.spacing}>
                    <Image source={{ uri:character.image}} style={styles.image}/>
                    <View style={styles.character_info}>
                      <Text style={styles.character_name}>{character.name}</Text>
                        <View style={styles.character_status}>
                            <View style={styles.character_indicator_container}>
                                <View 
                                style={[
                                    styles.character_status_indicator,
                                    character.status === 'Alive'
                                        ? styles.Character_alive 
                                        : styles.character_dead, 
                                    ]}>      
                                </View>
                            </View>
                            <Text 
                            style={styles.character_status_text}
                            >{`${character.status} - ${character.species}`}</Text>
                        </View>
                        <View style={styles.character__data}>
                            <Text style ={styles.Data__title}>
                                Last known Location:
                            </Text>
                             <Text style = {styles.Data__location}>
                                 {character.location.name}
                                </Text>       
                            <Text style={styles.Data__title}>
                                First seen in:
                            </Text>
                            <Text style={styles.Data__location}>
                                {episode}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    character:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    spacing:{
        flex: 1,
        flexDirection:"row",
        paddingRight: 10,
        paddingTop:20,
        paddingLeft:10,
    },
    image:{
        position: "relative",
        width: 180,
        height: 180,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    character_info:{
        flex: 1,
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"flex-start",
        paddingLeft: 10,
        height:"100%",
        backgroundColor:"#3c3e44",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    character_name:{
        height:50,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        color: '#fefefe',
        fontSize:24,
        fontWeight: "bold",
        textAlignVertical:"center",

    },
    character_status:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-start",
    },
    character_indicator_container:{
        height:17,
    },
    Character_alive:{
        backgroundColor:'#54DB33'
    },
    character_dead:{
        backgroundColor:"#AC1500"
    },
    character_status_indicator:{
        flex:1,
        marginTop:7,
        height:10,
        width:10,
        borderRadius:10,
    },
    character_status_text:{
        color:"#fff",
        marginLeft: 10,
        fontSize: 16,
    },  
    textContent:{
        height: 50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: '#fefefe',
        fontSize: 18,
        textAlignVertical: "center",   
    },
    last_location_title:{
        color: "#8a8b8c",
        fontSize:18,
    },
    last_location_location:{
        color:"#fff",
        fontSize:20,
    },
    character_data:{
        marginBottom:10,
    },
    Data__title: {
        color: "#8a8b8c",
        fontSize: 15,
    },
    Data__location: {
        color: "#fff",
        fontSize: 16,
    },
})