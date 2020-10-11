import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 7
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  leftButton: {
    flexDirection: 'row'
  },
  icon: {
    marginHorizontal: 7
  },
  likes: {
    fontWeight: 'bold'
  },
  postedAt: {
    color: 'gray',
    fontSize: 12
  }
})

export default styles