import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../ProfilePicture'
import styles from './style'

function Header({ user }) {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={user.imageUri} size={40} />
      <Text style={styles.text}>{user.name}</Text>
    </View>
  )
}

export default Header
