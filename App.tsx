import React from 'react'
import { Card, Header, ListItem, SearchBar } from './src/components'
import { FilterView, ListView, MainView, RoutineView, SearchView } from './src/styles/wrapper'
import { data } from './src/constants/data'
import { BGImage, FilterImage } from './src/styles/image'

const App = () => {
  return (
    <MainView>
      <Header />
      <RoutineView>
        <Card cardType='light' title='Morning Routine' text='Weekdays' time='7:00 AM' imageUrl={require('./src/assets/images/morning.png')} />
        <Card cardType='dark' title='Night Routine' text='Everyday' time='9:00 PM' imageUrl={require('./src/assets/images/night.png')} />
      </RoutineView>
      <BGImage source={require('./src/assets/images/background.png')} resizeMode="cover"></BGImage>
      <SearchView>
        <SearchBar />
        <FilterView>
          <FilterImage
            source={require('./src/assets/images/filter.png')}
          />
        </FilterView>
      </SearchView>
      <>
        <ListView
          data={data}
          renderItem={({ item }) => {
            return (
              <ListItem />
            )
          }}
        />
      </>
    </MainView>
  )
}

export default App