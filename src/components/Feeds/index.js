import React from 'react'
import { FlatList, View } from 'react-native'
import Post from '../Post'
import Stories from '../Stories'

const post = [
  {
    user: {
      name: 'wiku',
      imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/70752876_393608954919754_127137273572647846_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=pFwR_OqdmpQAX-BZGZ0&_nc_tp=18&oh=91741ba81c97de5c9a141973340f9a12&oe=5FAAA21B'
    },
    imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/37321486_642836086084263_2405873265688969216_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=103&_nc_ohc=7jwFO0tbx4gAX8ivhUy&_nc_tp=18&oh=7db9d5c8b6e982088dc49059e15526b9&oe=5FAB1108',
    caption: 'sedikit demi bukit demi sedikit menjadi bukit lama lama menjadi bukit',
    likes: 234,
    postedAt: '6 minutes ago'
  },
  {
    user: {
      name: 'galindra',
      imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/73455974_208615933482446_7709492876577093498_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=9TazuLrY3sAAX-VxAjZ&_nc_tp=18&oh=921d89ee13f5edfebb1e94f7d68d70b2&oe=5FABD798'
    },
    imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/85171822_140453247440354_6999572365315368056_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=wMhO2pU8HxwAX8riZfH&_nc_tp=18&oh=c8fe6702ffd9767ff2f2659ad45f3246&oe=5FAB954B',
    caption: 'biasanya kalo foto mendaki captionnya apa?',
    likes: 234,
    postedAt: '6 minutes ago'
  }
]

function Feeds() {
  return (
    <View>
      <FlatList
        data={post}
        ListHeaderComponent={Stories}
        keyExtractor={({ caption }) => caption}
        renderItem={({ item }) => (
          <Post post={item} />
        )}
      />
    </View>
  )
}

export default Feeds
