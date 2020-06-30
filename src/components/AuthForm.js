import React,{useState} from 'react'
import {Text,Input,Button  } from 'react-native-elements';
import Spacer from './Spacer'


const AuthForm = ({headerText,errorMessage,onSubmit,sbuttontext}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    return (
    <>
         <Spacer>
           <Text h3>{headerText}</Text>
            </Spacer>
            <Input label="Email" autoCapitalize="none" autoCorrect={false}
                value={email} onChangeText={(ne) => setemail(ne)} />
            <Spacer />
            <Input secureTextEntry={true} label="Password" autoCapitalize="none" autoCorrect={false}
                value={password} onChangeText={(np) => setpassword(np)} />
            {errorMessage ? 
            <Text style={{ fontSize: 16, color: 'red', marginLeft: 12, marginBottom: 10 }}>
                {errorMessage}</Text> : null}
            <Spacer>
                <Button title={sbuttontext} 
                onPress={() => onSubmit({ email, password })} />
            </Spacer>
    </>
        
    )
}

export default AuthForm;