import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{flex:1 , justifyContent:"center" , alignItems:'center'}} className='items-center justify-center'>
      <Text className='text-xl font-xl font-bold text-red'>index</Text>
      <Link href='../../(sign-in)/signIn'> Signi</Link>
      
      <Link href='/explore'> Link</Link>
      <Link href='/explore'> Link</Link>

    </View>
  )
}