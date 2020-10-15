import React, { useState, useEffect } from 'react'
import { Dimensions, TouchableWithoutFeedback, SafeAreaView, ImageBackground, ActivityIndicator, View, Text, Keyboard } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from './style'
import data from '../../data/stories'
import ProfilePicture from '../../components/ProfilePicture'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-gesture-handler'

const StoryScreen = () => {

  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const currentId = route.params.id;

  useEffect(() => {
    const userStories = data.find(data => data.id === currentId);
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const handleNextUserStory = () => {
    navigation.push('Story', { id: (parseInt(currentId) + 1).toString() });
  }

  const handlePrevUserStory = () => {
    navigation.goBack();
  }

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      return handleNextUserStory();
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return handlePrevUserStory();
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }

  const pressHandle = (event) => {
    Keyboard.dismiss();
    const locationX = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if (locationX < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  }

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  const activeStory = userStories.stories[activeStoryIndex];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={pressHandle}>
        <ImageBackground style={styles.image} source={{ uri: activeStory.imageUri }} >
          <View style={styles.textContainer}>
            <View style={styles.textContainerLeft}>
              <ProfilePicture uri={userStories.user.imageUri} size={45} />
              <Text style={styles.textName}>{userStories.user.name}</Text>
              <Text style={styles.textTime}>{activeStory.postedTime}</Text>
            </View>
            <View style={styles.textContainerRight}>
              <EntypoIcon name="dots-three-vertical" size={20} color="white" />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.camera}>
              <Ionicons name="camera-outline" size={35} color='white' />
            </View>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput style={styles.dm} placeholder='send message...' placeholderTextColor="white" />
            </TouchableWithoutFeedback>
            <View style={styles.send}>
              <FeatherIcon name="send" size={30} color='white' />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )


}

export default StoryScreen
