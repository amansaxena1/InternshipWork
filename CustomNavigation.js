import React from 'react'
import TeamScreen from './screens/Team';
import DetailsScreen from './screens/Details';
import HomeScreen from './screens/Home';
import SearchDetails from './screens/SearchDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TeamScreenNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Team1" component={TeamScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}
export { TeamScreenNavigator }

const SearchScreenNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SearchDetails" component={SearchDetails} />
        </Stack.Navigator>
    )
}
export {SearchScreenNavigator}