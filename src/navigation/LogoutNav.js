import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import profile from '../screen/ProfileScreen'

const NotifNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="Logout" component={profile} />
        </Tab.Navigator>
    );
};

export default NotifNavigation;