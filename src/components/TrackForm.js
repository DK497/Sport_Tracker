import React,{useContext,useState} from 'react'
import { Input,Button } from 'react-native-elements';
import Spacer from '../components/Spacer'
import {Context as Lcontext} from '../components/context/LocationContext'

const TrackForm = () => {
 const {state:{name,recording,locations},sr,sor,cn}=useContext(Lcontext)
  
    return (
     <>
     <Input value={name} onChangeText={cn} placeholder="Name"/>
     <Spacer/>
     {recording? <Button onPress={sor} title="stop "/>: 
                   <Button onPress={sr} title="start record"/>}
                   <Spacer/>
   {!recording&&locations.length?<Button  title="save record"/>:null}
    
     </>   
    )
}

export default TrackForm;