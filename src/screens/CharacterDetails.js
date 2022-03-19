import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function CharacterDetails(props){
    const { character } = props.route.params;
    return (
        <View style={styles.containe}>
            <View style={styles.content}>
                <image style={styles.image} source={{uri: character.image}}/>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Name: </Text>
                    <Text style={styles.property_value}>{character.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Status: </Text>
                    <Text style={styles.property_value}>{character.status}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Species: </Text>
                    <Text style={styles.property_value}>{character.species}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Type:</Text>
                    <Text style={styles.property_value}>{character.type || "Unknown"}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Gender: </Text>
                    <Text style={styles.property_value}>{character.gender}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Origin: </Text>
                    <Text style={styles.property_value}>{character.origin.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Location: </Text>
                    <Text style={styles.property_value}>{character.location.name}</Text>
                </View> 
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"flex-start",
        alignContent:"center",
        backgroundColor:"#fff",
        margin:20,
        borderRadius:30,
        shadowColor:"#363636",
        marginBottom:20,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:1,
        shadowRadius:3.84,
        elevation:5,
        paddingBottom:40,
    },
    image:{
        margin:10,
        marginTop:20,
        marginBottom:20,
        position:"relative",
        alignSelf:"center",
        width:250,
        height:250,
        borderRadius:150,
        borderColor:"gray",
        borderWidth:3,
    },
    property:{
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin:0,
        padding:0,
    },
    property_name:{
        fontSize:14,
        alignSelf:"flex-start",
        color:"#ECECEC",
        marginLeft:20,
    },
    property_value:{
        width:"70%",
        color:"#ECECEC",
        fontSize:16,
        alignSelf:"flex-start",
        marginBottom:10,    

    }
})