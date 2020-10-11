import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import styles from './style'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

function Footer({ likes, caption, postedAt }) {
  const [isLiked, setIsliked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const onLikePressed = () => {
    setIsliked(!isLiked)
  }

  const onBookmarkPressed = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.leftButton}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <AntDesignIcon style={styles.icon} name={isLiked ? "heart" : "hearto"} size={25} color={isLiked ? "red" : "black"} />
          </TouchableWithoutFeedback>
          <FontistoIcon style={styles.icon} name="comment" size={23} color="black" />
          <FeatherIcon style={styles.icon} name="send" size={27} color="black" />
        </View>
        <View style={styles.rightButton}>
          <TouchableWithoutFeedback onPress={onBookmarkPressed}>
            <FontAwesomeIcon style={styles.icon} name={isBookmarked ? "bookmark" : "bookmark-o"} size={27} color="black" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Text style={styles.likes}>{isLiked ? parseInt(likes + 1) : likes} Likes</Text>
      <Text>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  )
}

export default Footer
