import '../_mockLocation'
import React,{useContext,useCallback} from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import {Context as Lcontext   } from '../components/context/LocationContext' 
import useLocation from '../components/Hooks/useLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({isFocused}) => {
  const {state,al}=useContext(Lcontext)

  const callback=useCallback((location)=>{
    al(location,state.recording)},[state.recording])

  const [error]=useLocation(isFocused||state.recording,callback)
  //sending add location function to useLocation Hook

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 48 }}>TrackCreate Screen</Text>
        <Map />
      
        {error?<Text style={{color:'red'}}>Please Enable location</Text>:null}
        <TrackForm/>
    </SafeAreaView>

    )
}

export default withNavigationFocus(TrackCreateScreen);