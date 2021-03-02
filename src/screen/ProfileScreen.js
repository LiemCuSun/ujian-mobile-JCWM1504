import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    Button
} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'

// import actions
import { logout } from '../actions'

// import style
import styles from '../style/profileStyle'

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Profile</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Logout"
                    onPress={() => dispatch(logout())}
                    buttonStyle={styles.button}
                />
            </View>
        </View>
    )
}

export default ProfileScreen