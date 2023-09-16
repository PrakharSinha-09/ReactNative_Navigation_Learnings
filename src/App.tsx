import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

//this is made so that we can make sure that, we have exact type that we can pass, and exporting this type as well, so that we can use it on other screens as well!
//for the sake of type safety, optional
export type RootStackParamList = {
  Home: undefined;                            //this means, we are expecting nothing from the Home
  Details: {productId: string};               //this means that, we expect this details screen gonna come up with the productId, and that will be the type of string!
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Stack=createNativeStackNavigator<RootStackParamList>()
function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title:"Trending Products"
        }}
        />
        <Stack.Screen 
        name='Details'
        component={Details}
        options={{
          title:"Product Details"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
