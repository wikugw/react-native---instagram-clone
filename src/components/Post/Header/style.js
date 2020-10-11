import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 15,
    justifyContent: 'space-between'
  },
  left: {
    flexDirection: "row",
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  text: {
    alignSelf: "center",
    fontWeight: "700",
    marginLeft: 5
  }
})

export default styles