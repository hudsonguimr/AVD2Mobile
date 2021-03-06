import React from 'react'


import { TouchableOpacityProps, Text } from 'react-native'

import {
  Container,
  Title
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonConfirm({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}