import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import HouseCard from '../components/HouseCard'
import data from '../data'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ScrollView>
          {
              data.map(house => (
                <HouseCard key={house.id} houseInfo={house}/>
              ))
          }
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
