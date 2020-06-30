import React,{useContext,useEffect} from 'react'
import {Context as AuthContext} from '../components/context/AuthContext'
import { View, Text } from 'react-native'

const ResolveAuthScreen = () => {
    const {ts} = useContext(AuthContext)
    
    useEffect(() => {
        ts()
    },[])
    return (
        <View>
            <Text>rtre</Text>
        </View>
    )
}

export default ResolveAuthScreen;
