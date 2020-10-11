import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../ProfilePicture'
import styles from './style'
import Icon from 'react-native-vector-icons/Entypo';

function Header({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={user.imageUri} size={40} />
        <Text style={styles.text}>{user.name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={18} color="black" />
      </View>
    </View>
  )
}

export default Header
