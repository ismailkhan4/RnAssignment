import React, { useEffect, useState, useMemo } from 'react';
import { Card, Header, ListItem, SearchBar } from './src/components';
import { FilterView, ListView, MainView, RoutineView, SearchView, Wrapper } from './src/styles/wrapper';
import { BGImage, FilterImage } from './src/styles/image';
import { fetchReminders } from './src/helpers/api';
import { CardText } from './src/styles/text';
import { PaginationButton } from './src/styles/button';
import { ActivityIndicator, RefreshControl, TouchableOpacity, View } from 'react-native';
import { sortData } from './src/helpers/filter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  const [reminders, setReminders] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('desc');
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [swipedItem, setSwipedItem] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchQuery]);

  const toggleSortOrder = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  const handleFilterButtonClick = () => {
    toggleSortOrder();
  };

  const fetchData = async () => {
    setIsLoading(true);
    const newData = await fetchReminders(currentPage);
    const filteredData = applySearchFilter(newData.docs);
    if (currentPage === 1) {
      setReminders(filteredData);
    } else {
      setReminders(prevData => [...prevData, ...filteredData]);
    }
    setTotalPages(newData.totalPages);
    setIsLoading(false);
  };

  const sortedData = useMemo(() => sortData([...reminders], sortBy), [reminders, sortBy]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const applySearchFilter = (data: any[]) => {
    if (!searchQuery.trim()) {
      return data;
    }
    return data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())); // Filter data based on task name
  };

  const handleRefresh = () => {
    setCurrentPage(1);
    setIsRefreshing(true);
    try {
      fetchData();
      setIsRefreshing(false)
    } catch (error) {

    }
  };

  const handleDelete = (id: string) => {
    setReminders(prevReminders => prevReminders.filter(reminder => reminder.id !== id));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MainView style={{ flex: 1 }}>
        <Header />
        <RoutineView>
          <Card cardType='light' title='Morning Routine' text='Weekdays' time='7:00 AM' imageUrl={require('./src/assets/images/morning.png')} />
          <Card cardType='dark' title='Night Routine' text='Everyday' time='9:00 PM' imageUrl={require('./src/assets/images/night.png')} />
        </RoutineView>
        <BGImage source={require('./src/assets/images/background.png')} resizeMode="cover"></BGImage>
        <SearchView>
          <SearchBar onSearch={setSearchQuery} />
          <FilterView>
            <TouchableOpacity onPress={handleFilterButtonClick}>
              <FilterImage
                source={require('./src/assets/images/filter.png')}
              />
            </TouchableOpacity>
          </FilterView>
        </SearchView>
        <ListView
          data={sortedData}
          style={{ height: 500 }}
          renderItem={({ item }: { item: any }) => (
            <ListItem
              type={item?.type}
              name={item?.name}
              image={item?.visualAidUrl}
              onDelete={() => {
                handleDelete(item.id);
                setSwipedItem(null);
              }}
              onSwipeStart={() => setSwipedItem(item.id)}
              isSwiped={swipedItem === item.id}
            />

          )}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={() => (
            <>
              {isLoading ? (
                <View style={{ flex: 1, height: 500, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size={50} />
                </View>
              ) : (
                <PaginationButton onPress={handleLoadMore} disabled={currentPage === totalPages}>
                  <CardText>Load More</CardText>
                </PaginationButton>
              )}
            </>
          )}
          refreshControl={ // Add refreshControl prop
            <RefreshControl
              refreshing={isRefreshing} // Set refreshing state
              onRefresh={handleRefresh} // Handle refresh event
            />
          }
        />

      </MainView>
    </GestureHandlerRootView>
  );
};

export default App;
