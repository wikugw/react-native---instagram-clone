import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'

function Footer({ likes, caption, postedAt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likes} Likes</Text>
      <Text>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  )
}

export default Footer
