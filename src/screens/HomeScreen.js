import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import HouseCard from '../components/HouseCard'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
            <HouseCard houseInfo={ 
              { 
                title: 'The Willows', 
                img: require('../assets/house_1.jpg'),
                location: '3517 W. Gray St. Utica',
                rooms: 3,
                bathrooms: 2,
                dimensions: '230 ft²',
                price: 440
              } 
            }/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  }
})
