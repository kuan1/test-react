import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useHistory, useLocation } from "react-router-native";

import routes from './index'

const NavList = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  const to = (path: string) => {
    history.push(path)
  }

  return (
    <View style={styles.container}>
      {
        routes.map(item => (
          <TouchableOpacity
            key={item.path}
            style={[styles.btn, pathname === item.path ? styles.active : {}]}
            onPress={() => to(item.path)}
          >
            <Text style={pathname === item.path ? styles.activeText : {}}>{item.name} {pathname === item.path ? 1 : 0}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dbdbdb'
  },
  active: {
    backgroundColor: '#1890ff'
  },
  activeText: {
    color: 'white'
  }
})


export default NavList
