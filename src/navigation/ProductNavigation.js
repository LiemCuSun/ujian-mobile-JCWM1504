import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

// import screens
import ProductScreen from '../screen/ProductScreen'

// imports components
import AvatarComp from '../components/AvatarComp'
import CartScreen from '../screen/CartScreen'

const ProductNavigation = () => {
    const Stack = createStackNavigator()

    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Covid-19"
                component={ProductScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#28527a',
                    },
                    headerTitleStyle: {
                        color: '#ffffff'
                    },
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <AvatarComp username={username} />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 15
                    }
                }}
            />
            <Stack.Screen
                name="Live Update"
                component={CartScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#28527a',
                    },
                    headerTitleStyle: {
                        color: '#ffffff'
                    },
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <AvatarComp username={username} />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 15
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default ProductNavigation