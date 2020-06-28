import React from 'react'
import { Text,View,StyleSheet,Button } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
        <Text style={{fontSize:48}}>TrackList Screen</Text>
        <Button title="Go To TrackDetail" 
        onPress={()=>navigation.navigate('TrackDetail')}/>
        </>
        
        )
}

const styles=StyleSheet.create({

})

export default TrackListScreen;