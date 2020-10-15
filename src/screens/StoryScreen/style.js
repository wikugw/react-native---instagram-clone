import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      justifyContent: 'space-between'
    },
    textContainer: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    textContainerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    textContainerRight: {
      paddingHorizontal: 5
    },
    textName: {
      marginHorizontal: 5,
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18
    },
    textTime: {
      color: 'white',
      fontSize: 14,
      paddingTop: 4
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 30,
      paddingHorizontal: 10,
      alignItems: 'center'
    },
    camera: {
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 25,
      padding: 5,
      marginRight: 10,
    },
    dm: {
      borderColor: 'white',
      borderWidth: 1,
      flex: 1,
      borderRadius: 30,
      paddingHorizontal: 15,
      color: 'white'
    },
    send: {
      marginLeft: 15
    }
  }
)

export default styles