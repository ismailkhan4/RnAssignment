import React, { useEffect, useState, useMemo } from 'react';
import { Card, Header, ListItem, SearchBar } from './src/components';
import { FilterView, ListView, MainView, PaginationView, RoutineView, SearchView } from './src/styles/wrapper';
import { BGImage, FilterImage } from './src/styles/image';
import { fetchReminders } from './src/helpers/api';
import { CardText } from './src/styles/text';
import { PaginationButton } from './src/styles/button';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { sortData } from './src/helpers/filter';

const App = () => {
  const [reminders, setReminders] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc');
  const totalPages = 192;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const toggleSortOrder = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  const handleFilterButtonClick = () => {
    toggleSortOrder();
  };

  const fetchData = async () => {
    const newData = await fetchReminders(currentPage);
    setReminders(newData);
  };

  const sortedData = useMemo(() => sortData([...reminders], sortBy), [reminders, sortBy]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <MainView style={{ flex: 1 }}>
      <Header />
      <RoutineView>
        <Card cardType='light' title='Morning Routine' text='Weekdays' time='7:00 AM' imageUrl={require('./src/assets/images/morning.png')} />
        <Card cardType='dark' title='Night Routine' text='Everyday' time='9:00 PM' imageUrl={require('./src/assets/images/night.png')} />
      </RoutineView>
      <BGImage source={require('./src/assets/images/background.png')} resizeMode="cover"></BGImage>
      <SearchView>
        <SearchBar />
        <FilterView>
          <TouchableOpacity onPress={handleFilterButtonClick}>
            <FilterImage
              source={require('./src/assets/images/filter.png')}
            />
          </TouchableOpacity>
        </FilterView>
      </SearchView>
      {reminders.length ? (
        <>
          <ListView
            data={sortedData}
            renderItem={({ item }: { item: any }) => (
              <ListItem
                type={item?.type}
                name={item?.name}
                image={item?.visualAidUrl}
              />
            )}
          />
          <PaginationView>
            <PaginationButton onPress={handlePrevPage} disabled={currentPage === 1}>
              <CardText>Previous</CardText>
            </PaginationButton>
            <CardText>{`${currentPage} / ${totalPages}`}</CardText>
            <PaginationButton onPress={handleNextPage} disabled={currentPage === totalPages}>
              <CardText>Next</CardText>
            </PaginationButton>
          </PaginationView>
        </>
      ) : <View style={{ flex: 1, flexGrow: 30, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={50} />
        <CardText>Routines is Loading</CardText>
      </View>}
    </MainView>
  );
};

export default App;
