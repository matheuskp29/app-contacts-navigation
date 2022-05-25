import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navitagor
            initialRouteName="listOfLocals"
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary},
                headerTintColor: 'white'
            }}>
                
            </Stack.Navitagor>
    </NavigationContainer>
)

export default LocalsNavigator

const styles = StyleSheet.create({})