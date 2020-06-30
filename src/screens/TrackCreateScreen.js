import '../_mockLocation'
import React,{useState,useEffect} from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location'

const TrackCreateScreen = () => {
    const [error, seterror] = useState(null)
    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          await watchPositionAsync({
              accuracy:Accuracy.BestForNavigation,
              timeInterval:1000,
              distanceInterval:10
          },(location)=>{
                console.log(location)
          })
        } catch (e) {
          seterror(e);
        }
      }
      useEffect(() => {
         startWatching()
      },[])

    return (
    <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 48 }}>TrackCreate Screen</Text>
        <Map />
        {error?<Text style={{color:'red'}}>Please Enable location</Text>:null}
    </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;