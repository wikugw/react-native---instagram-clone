import React from 'react';
import { Image, View } from 'react-native'
import styles from './style'

const ProfilePicture = ({ uri, size = 70 }) => (
  <View style={[styles.container, { height: size + 6, width: size + 6 }]}>
    <Image
      style={[styles.image, { height: size, width: size }]}
      source={{ uri }} />
  </View>
)

export default ProfilePicture;