import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-red-500">Home</Text>
      <StatusBar style='auto'/>
      <Link href="/profile">Profile</Link>
    </View>
  )
}

export default Home