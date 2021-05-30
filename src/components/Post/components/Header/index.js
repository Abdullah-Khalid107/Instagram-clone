import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePicture'
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles'

function Header({ imageuri, name }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            <ProfilePicture uri={imageuri} size={40} />
            <Text style={styles.name}>{name}</Text>
            </View>

            <View style={styles.right}>
                <Icon name="dots-three-vertical" size={16} />
            </View>
        </View>
    )
}
export default Header;