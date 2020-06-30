import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext } from '../components/context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SignupScreen = () => {
    const { state, su,cem} = useContext(AuthContext)
    
    

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={cem}/>
            <AuthForm headerText='Sign Up for Tracker' 
            errorMessage={state.errorMessage} 
            onSubmit={({email,password})=>su({email,password})}
            sbuttontext="SignUp"/>
            
       <NavLink text="Already Registered ,Use Signin instead" routeName='Signin'/>

        </View>

    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 140
    }
})

export default SignupScreen