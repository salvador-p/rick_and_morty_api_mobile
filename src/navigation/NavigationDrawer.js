import { createDrawerNavigator } from '@react-navigation/drawer'
import React from '../screens/SettingsScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CharactersScreen from '../screens/CharactersScreen'

const Drawer = createDrawerNavigator();

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator initialRouteName="Characters">
            <Drawer.Screen name="Characters" component={CharactersScreen} />
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Settings' component={SettingsScreen}/>
        </Drawer.Navigator>
    )
}