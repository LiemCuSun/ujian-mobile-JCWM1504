import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer'


// import screens
import CartScreen from '../screen/CartScreen'
import ProfileScreen from '../screen/ProfileScreen'

// import navigation
import ProductNavigation from './ProductNavigation'
import logout from './LogoutNav'


const HomeNavigation = () => {
    const Tab = createBottomTabNavigator()
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Logout" component={logout} />
        </Drawer.Navigator>,
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if (route.name === 'Product') {
                        iconName = 'shoe-prints'
                    } else if (route.name === 'Cart') {
                        iconName = 'shopping-cart'
                    }
                    else if (route.name === 'Profile') {
                        iconName = 'user-circle'
                    }

                    return <FontAwesomeIcon name={iconName} color={color} size={size} />
                }
            })}
            tabBarOptions={{
                activeTintColor: '#28527a',
                inactiveTintColor: 'gray'
            }}>
            <Tab.Screen name="Home" component={ProductNavigation} />
            <Tab.Screen name="DATA" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default HomeNavigation