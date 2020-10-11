import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'

function Body({ imageUri }) {
  return (
    <View>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  )
}

export default Body
