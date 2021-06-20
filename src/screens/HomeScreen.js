import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import HouseCard from '../components/HouseCard'
import data from '../data'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <ScrollView>
          {
            data.map(house => (
              <HouseCard key={house.id} houseInfo={house}/>
            ))
          }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  }
})
