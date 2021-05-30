
import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import ProfilePicture from '../ProfilePicture'
import styles from './styles'

const Story = (props) => {
    const {
      story: {
        user: {
          id,
          imageuri,
          name
        }
      }
    } = props;

    const navigation=useNavigation()
    const onPress=()=>{
    navigation.navigate("Story", { userId: id });
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ProfilePicture uri={imageuri}/>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}


export default Story;