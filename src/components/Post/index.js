import React from 'react'
import { View } from 'react-native'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import styles from './style'

function Post({ post }) {
  return (
    <View style={styles.container}>
      <Header user={post.user} />
      <Body imageUri={post.imageUri} />
      <Footer likes={post.likes} caption={post.caption} postedAt={post.postedAt} />
    </View>
  )
}

export default Post
