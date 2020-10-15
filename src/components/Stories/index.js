import React from 'react'
import { FlatList, View } from 'react-native'
import Story from '../Story'
import styles from './style'
import data from '../../data/stories'

function Stories() {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={data}
        renderItem={({ item }) => (<Story story={item} />)} />
    </View>
  )
}

export default Stories
