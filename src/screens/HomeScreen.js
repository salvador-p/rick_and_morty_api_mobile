import {StyleSheet, View, Text, Button} from 'react-native'
import React from 'react'

export default function HomeScreen (props) {
    const {navigation} = props
    console.log(props)
    const goToPage = () =>{
        navigation.navigate("Settings")
    }
    return (
        <View style={styles.container}> 
            <Text>Homescreen</Text>
            <Button onPress={goToPage} title='Go to Settings'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4A4A4A',
      alignItems: 'center',
      justifyContent: 'center',
    },
});