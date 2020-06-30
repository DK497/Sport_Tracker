import React,{useContext} from 'react'
import { View,Text,StyleSheet,ActivityIndicator } from 'react-native';
import MapView ,{Polyline,Circle} from 'react-native-maps'
import {Context as LContext} from '../components/context/LocationContext'

const Map = () => {
   const {state:{currentLocation,locations}} =useContext(LContext)
   if(!currentLocation){
       return <ActivityIndicator size='large' style={{marginTop:200}}/>
    //    prints running spinner
   }
   
    return (
        <View >
            {/* //similar to images */}
            <MapView style={{height:300}}
            initialRegion={{
                // latitude:26.8739303,
                // longitude:80.9736635,
                ...currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01 }}
                 region={{...currentLocation.coords,
                latitudeDelta:0.01,
                longitudeDelta:0.01 }}>
                    <Circle center={currentLocation.coords}
                            radius={50} strokeColor="rgba(158,158,255,1)" 
                            fillColor="rgba(158,158,255,0.3)"/>
              <Polyline coordinates={locations.map((q)=>q.coords)}/>
            </MapView>
        </View>
        )
    
}

export default Map;