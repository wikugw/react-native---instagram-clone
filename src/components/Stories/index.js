import React from 'react'
import { FlatList, View } from 'react-native'
import Story from '../Story'

const data = [
  { name: 'wiku', imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/70752876_393608954919754_127137273572647846_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=pFwR_OqdmpQAX-BZGZ0&_nc_tp=18&oh=91741ba81c97de5c9a141973340f9a12&oe=5FAAA21B' },
  { name: 'galindra', imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/73455974_208615933482446_7709492876577093498_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=9TazuLrY3sAAX-VxAjZ&_nc_tp=18&oh=921d89ee13f5edfebb1e94f7d68d70b2&oe=5FABD798' },
  { name: 'wardhana', imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/71176430_407160876659840_679768333256523596_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=kTzv5XOA8BQAX-JVGFb&_nc_tp=18&oh=19f31159969afd59fb86058568a1a365&oe=5FAD56A0' },
  { name: 'wixter', imageUri: 'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/74515507_470384173618608_1788590574806949491_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Rx402Fm44SkAX9qH6ZJ&_nc_tp=18&oh=1e19a358aa78dd1563ab4ebeba47729e&oe=5FAD3506' },
  { name: 'wiku_2', imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/70752876_393608954919754_127137273572647846_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=pFwR_OqdmpQAX-BZGZ0&_nc_tp=18&oh=91741ba81c97de5c9a141973340f9a12&oe=5FAAA21B' },
  { name: 'galindraaaa', imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/73455974_208615933482446_7709492876577093498_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=9TazuLrY3sAAX-VxAjZ&_nc_tp=18&oh=921d89ee13f5edfebb1e94f7d68d70b2&oe=5FABD798' },
  { name: 'xXwardhana', imageUri: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/71176430_407160876659840_679768333256523596_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108&_nc_ohc=kTzv5XOA8BQAX-JVGFb&_nc_tp=18&oh=19f31159969afd59fb86058568a1a365&oe=5FAD56A0' },
  { name: 'wixterz', imageUri: 'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/74515507_470384173618608_1788590574806949491_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=Rx402Fm44SkAX9qH6ZJ&_nc_tp=18&oh=1e19a358aa78dd1563ab4ebeba47729e&oe=5FAD3506' }
]

function Stories() {
  return (
    <View>
      <FlatList
        horizontal
        keyExtractor={({ name }) => name}
        data={data}
        renderItem={({ item }) => (<Story name={item.name} imageUri={item.imageUri} />)} />
    </View>
  )
}

export default Stories
