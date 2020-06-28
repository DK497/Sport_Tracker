import createDataContext from './createDataContext'
import {AsyncStorage} from 'react-native'
import trackerApi from '../api/tracker'
import {navigate} from '../../navigationRef'


const authReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':{
            return {...state,errorMessage:action.payload}
        }
        case 'signup':{
            return {errorMessage:'',token:action.payload}
        }
        default:{
            return state
        }
    }
}

const signup=(dispatch)=>async ({email,password})=>{
   try{
   const response=await trackerApi.post('/signup',{email,password})
   await AsyncStorage.setItem('token',response.data.token)
   dispatch({type:signup,payload:response.data.token})
   navigate('TrackList')
   }catch(err){
    dispatch({type:'add_error',payload:'Something went wrong with sign UP'})
   }
   }


const signin=(dispatch)=>{
    return ({email,password})=>{
 
    }
 }
 const signout=(dispatch)=>{
    return ({email,password})=>{
 
    }
 }

export const {Context,Provider}=createDataContext(
                    authReducer,
                  {si:signin,su:signup,so:signout},{token:null,errorMessage:''})

