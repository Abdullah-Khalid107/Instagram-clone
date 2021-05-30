import React from 'react'
import { View, Text } from 'react-native'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({ post }) => (

    <View>
        <Header imageuri={post.user.imageuri} name={post.user.name} />
        <Body imageuri={post.image} />
        <Footer
            likesCount={post.likesCount}
            caption={post.caption}
            postedAt={post.postedAt}
        />
    </View>

)
export default Post;