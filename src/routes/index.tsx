import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'
import { Home } from '../pages/Home'

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  )
}