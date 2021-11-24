import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home'
import { Name } from '../pages/Name'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="Name"
        component={Name}
      />

      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}