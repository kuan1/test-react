import React, { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  SectionList,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const users = [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
]

const sections = [
  { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
  { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
]

const Test00 = () => {
  const [text, setText] = useState('luzhongk')

  return (
    <>
      <ScrollView>
        <View style={styles.item}>
          <Image source={logo} />
        </View>
        <View style={styles.item}>
          <View style={styles.inputWrap}>
            <Text>姓名: </Text>
            <TextInput style={styles.input} placeholder='请输入' value={text} onChangeText={text => setText(text)} />
          </View>
          <View style={styles.text}>
            <Text>{text}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Button title="按钮（ios/android表现不同）" onPress={() => alert('点击')} />
          <TouchableOpacity onPress={() => alert('container')}>
            <TouchableWithoutFeedback onPress={() => alert('inner')}>
              <Text>测试</Text>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.flatContainer}>
        <FlatList
          data={users}
          renderItem={({ item, index }) => <View key={item.key}><Text>{index + 1}: {item.key}</Text></View>}
        />
      </View>
      <View style={styles.flatContainer}>
        <SectionList
          sections={sections}
          renderItem={({ item, index }) => <View><Text>{index}· {item}</Text></View>}
          renderSectionHeader={({section}) => <View style={styles.sectionHeader}><Text>{section.title}</Text></View>}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#dbdbdb',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    fontSize: 20
  },
  text: {
    marginTop: 10,
    backgroundColor: '#ccc',
    fontSize: 20
  },
  flatContainer: {
    borderColor: '#dbdbdb',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 100
  },
  sectionHeader: {
    backgroundColor: '#eee'
  }
})

export default Test00
