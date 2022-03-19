import React, { useEffect } from "react"
import { StyleSheet, Image, SafeAreaView, View } from "react-native"

const image_url = "https://w0.peakpx.com/wallpaper/959/345/HD-wallpaper-rickit-ir-morty-rick.jpg"

export default function SplashScreen({ navigation }){
    useEffect(() => {
        setTimeout(() => { 
            navigation.replace("Characters")
        },7000)
    });
    return(
        <SafeAreaView style={styles.image_container}>
                <Image source={{uri: image_url}} style={styles.Image}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
    },
    Image:{
        width: "100%",
        height: "100%",
    }
})