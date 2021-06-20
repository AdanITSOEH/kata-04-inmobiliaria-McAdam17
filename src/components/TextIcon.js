import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

function TextIcon ({ title, iconName, light = false }) {
  return (
    <View style={styles.container}>
        <Icon 
          name={ iconName } 
          color= {light ? '#000' : '#595959'}
          size= {20} 
          type='font-awesome'
        />
        <Text style={light ? styles.lightTitle : styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  title: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  lightTitle: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: '300',
    color: 'gray'
  }
})

export default TextIcon
