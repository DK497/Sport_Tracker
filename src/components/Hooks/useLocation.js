import { useState,useEffect } from 'react';
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location'

export default (isFocused,callback) => {
    const [error, seterror] = useState(null)
    
   

      useEffect(() => {
 let subscriber
        const startWatching = async () => {
          try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
              throw new Error('Location permission not granted');
            }
          subscriber=await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },callback
                  // This function is called on each location update. 
                  // It is passed exactly one parameter: an object representing Location type
            )
  
            
          } catch (e) {
            seterror(e);
          }
        }

        if(isFocused)
        {startWatching()}
        else{
          if(subscriber)
          {
        subscriber.remove()}
        subscriber=null
        }
        return ()=>{
          if(subscriber)
          subscriber.remove()
        }
        
     },[isFocused,callback])

     return [error]
     //just convention for hook to return array
}

