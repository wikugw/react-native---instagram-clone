import React from 'react';
import { useNavigation } from '@react-navigation/native'
import ProfilePicture from '../ProfilePicture'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Story = (story) => {
  const {
    story: {
      id,
      user: {
        imageUri,
        name
      }
    }
  } = story
  const Navigation = useNavigation();

  const nameSlice = (name) => {
    if (name.length > 8) {
      return name.substring(0, 8) + '...';
    } else {
      return name
    }
  }

  const onPress = () => {
    Navigation.navigate('Story', { id: id });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.textStory}>{nameSlice(name)}</Text>
    </TouchableOpacity >
  )
}



export default Story