  
import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Body = ({ imageuri }) => (
    <Image style={styles.image } source={{uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}}/>
)

export default Body;