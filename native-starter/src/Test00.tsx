import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Test00 = () => {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>姓名</Text>
        <TextInput placeholder='请输入' onChangeText={text => setText(text)} />
      </View>
      <View style={styles.text}>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    borderColor: '#dbdbdb',
    borderWidth: 1
  },
  text: {
    marginTop: 10,
    backgroundColor: '#ccc'
  }
})

export default Test00
