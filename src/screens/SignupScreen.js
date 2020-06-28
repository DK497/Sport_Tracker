import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../components/context/AuthContext'



const SignupScreen = ({ navigation }) => {
    const { state, su } = useContext(AuthContext)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Signup for Tracker</Text>
            </Spacer>
            <Input label="Email" autoCapitalize="none" autoCorrect={false}
                value={email} onChangeText={(ne) => setemail(ne)} />
            <Spacer />
            <Input secureTextEntry={true} label="Password" autoCapitalize="none" autoCorrect={false}
                value={password} onChangeText={(np) => setpassword(np)} />
            {state.errorMessage ? <Text style={{ fontSize: 16, color: 'red', marginLeft: 12, marginBottom: 10 }}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="SignUP" onPress={() => su({ email, password })} />
            </Spacer>
            <TouchableOpacity onPress={() => { navigation.navigate('Signin') }}>
                <Spacer>
                    <Text style={{color:"blue"}}>Already have an Account?Signin Instead</Text>
                </Spacer>  
            </TouchableOpacity>


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