import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { NativeRouter, Route } from "react-router-native";

import NavList from './src/routes/NavList'

import routes from './src/routes'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <View style={styles.content}>
          <NavList />
          <View style={styles.wrap}>
            {
              routes.map(item => (
                <Route key={item.path} exact path={item.path} component={item.component} />
              ))
            }
          </View>
        </View>
      </NativeRouter>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  content: {
    backgroundColor: '#eee',
    flex: 1,
    padding: 10
  },
  wrap: {
    backgroundColor: 'white',
    padding: 15
  }
})


export default App
