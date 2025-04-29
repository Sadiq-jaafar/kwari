import './globals.css'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayouy() {
  return (
   <Stack screenOptions={{headerShown: false}}/>
  )
}