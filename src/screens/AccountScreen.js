import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../components/context/AuthContext'
import { SafeAreaView } from 'react-navigation'

const AccountScreen = () => {
    const { so } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <View>
                <Text style={{ fontSize: 48 }}>Account Screen</Text>
                <Button title="SignOut"
                    onPress={so} />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})

export default AccountScreen;