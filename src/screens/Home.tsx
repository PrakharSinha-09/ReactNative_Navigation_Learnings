import React from 'react'
import { View, Text, StyleSheet,Pressable } from 'react-native'

//navigations
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'

//lne 8-9 for type safety!, we can ignore it completely!
import { RootStackParamList } from '../App'
type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>

//the prop navigation, which we have destructured is available to us beacause we have configured the navigation in App.tsx right, otherwise it wouldn't be available!
const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Pressable
    //   onPress={()=>navigation.navigate("Details",{                 //see one thing, nowhere, we have imported anything like Details, but it got that, how same reason, in the App.tsx, we have configured the navigation for two names right i.e., Home and Detail, so it knows it needs any of them!
    //     productId:"abc123"
    //   })}

    //another way via push... there are many other ways as well!
        onPress={()=>navigation.push('Details',{
            productId:"34ad"           //and yes, this means we are passing data, when we get onto to the details screen
        })}
      >
        <Text>Go To Details</Text>

      </Pressable>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    smallText:{
        color:'#000000'
    }
})