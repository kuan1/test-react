import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function test() {
  for (let i = 0; i < 100; i++) {
    console.log(i)
  }
}

export default function App() {
  useEffect(() => {
    console.log('load')
  }, [])
  return (
    <View style={styles.container}>
      <View>
        <Text>1234</Text>
      </View>
      <TouchableOpacity onPress={test}>
        <Text>测试</Text>
      </TouchableOpacity>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '50%',
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
});
