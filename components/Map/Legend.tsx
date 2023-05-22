import React from 'react'
import { Icon } from '@rneui/themed'

export const CollectedIcon = () => {
  return (
    <Icon name='check-circle' type='font-awesome' color='#00B267' />
  )
}

export const NotCollectedIcon = () => {
  return (
    <Icon name='circle' type='font-awesome' color='#B28B00' />
  )
}

export const OutOfOrderIcon = () => {
  return (
    <Icon name='exclamation-triangle' type='font-awesome' color='#B22000' />
  )
}