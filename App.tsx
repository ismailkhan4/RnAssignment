import { View } from 'react-native'
import React from 'react'
import { Card, Header } from './src/components'
import { RoutineView } from './src/styles/wrapper'

const App = () => {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <Header />
      <RoutineView>
        <Card cardType='light' title='Morning Routine' text='Weekdays' time='7:00 AM' imageUrl={require('./src/assets/images/morning.png')} />
        <Card cardType='dark' title='Night Routine' text='Everyday' time='9:00 PM' imageUrl={require('./src/assets/images/night.png')} />
      </RoutineView>
    </View>
  )
}

export default App