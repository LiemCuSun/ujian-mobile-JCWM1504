import React from 'react'
import { Avatar } from 'react-native-elements'

const AvatarComp = ({ username }) => {
    return (
        <Avatar
            rounded
            title={username.slice(0, 1).toUpperCase()}
            overlayContainerStyle={{ backgroundColor: '#fbeeac' }}
            titleStyle={{ color: '#28527a' }}
        />
    )
}

export default AvatarComp