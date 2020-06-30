import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import MapView ,{Polyline} from 'react-native-maps'

const Map = () => {
    let points=[]
    for (let i = 0; i < 20; i++) {
       points.push({
        latitude:37.32+i*0.001,
        longitude:-122.03121+i*0.001
       })
        
    }
    return (
        <View >
            {/* //similar to images */}
            <MapView style={{height:300}}
            initialRegion={{
                latitude:37.32,
                longitude:-122.03121,
                latitudeDelta:0.01,
                longitudeDelta:0.01 }}>
              <Polyline coordinates={points}/>
            </MapView>
        </View>
        )
    
}

export default Map;