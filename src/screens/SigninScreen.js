import React, {  useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext } from '../components/context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SigninScreen = () => {
    const { state, si,cem } = useContext(AuthContext)
    
    return (
       <View style={styles.container}>
            <NavigationEvents onWillFocus={cem}/>
            <AuthForm headerText='Sign In for Tracker' 
            errorMessage={state.errorMessage} 
            onSubmit={({email,password})=>si({email,password})}  
            
            sbuttontext="SignIn"/>
            
       <NavLink text="Not Registered ,Use Signup instead" routeName='Signup'/>
       </View>
    )
}
SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 140
    }
})

export default SigninScreen;