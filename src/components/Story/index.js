import React from 'react';
import ProfilePicture from '../ProfilePicture';
import { View, Text } from 'react-native'
import styles from './style'

const nameSlice = (name) => {
  if (name.length > 8) {
    return name.substring(0, 8) + '...';
  } else {
    return name
  }
}

const Story = ({ imageUri, name }) => (
  <View style={styles.container}>
    <ProfilePicture uri={imageUri} />
    <Text style={styles.textStory}>{nameSlice(name)}</Text>
  </View >
)

export default Story