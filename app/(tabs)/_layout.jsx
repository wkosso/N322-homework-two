import { View, Text } from 'react-native'
import React from 'react'
import{Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      headerTitle: "Home",
    }}>
      <Tabs.Screen name="index" options={{headerShown: false}} />
      <Tabs.Screen name="portfolio" options={{headerShown: false}} />
      <Tabs.Screen name="about" options={{headerShown: false}} />
    </Tabs>
  )
}