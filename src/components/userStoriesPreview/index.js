import React from 'react'
import { View, Text,FlatList } from 'react-native'
// import  from '../Post/components/Body/styles'
import Story from '../userStoryPreview'
import styles from './styles'
import storiesData from '../../data/stories'

 function Stories() {
    return (
       <FlatList
       data={storiesData}
       keyExtractor={({user:{id}})=>id}
       horizontal
       style={styles.container}
       showsHorizontalScrollIndicator={false}
       renderItem={({item}) => <Story story={item}/>}
       />
       
    )
}

export default Stories;