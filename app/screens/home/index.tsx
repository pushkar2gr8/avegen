import {useFocusEffect, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback} from 'react';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import {View, Text, ActivityIndicator} from 'react-native';
import {Constants} from '../../assets/constants';
import AgendaItem from '../../components/agendaItem';
import useCalenderData from './hooks';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const {trackers, marked, isLoading, refetch, firstDayInPreviousMonth} =
    useCalenderData();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const renderItem = ({item}: any) => {
    return (
      <AgendaItem
        key={item?.id}
        item={item}
        onPress={() =>
          navigation.navigate(
            Constants.Trackers as never,
            {
              tracker: item,
              disabled: true,
            } as never,
          )
        }
      />
    );
  };

  const emptyComponent = () => {
    return (
      <View style={styles.container}>
        <Text>No Data Available</Text>
      </View>
    );
  };

  const loaderIndicator = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          style={{marginTop: 5}}
          size={'small'}
          color={'#33acdd'}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <CalendarProvider
        date={trackers[1]?.title || moment(new Date()).format('YYYY-MM-DD')}>
        <ExpandableCalendar
          markedDates={marked}
          onDayPress={day => {
            if (!marked.hasOwnProperty(day.dateString)) {
              navigation.navigate(
                Constants.Trackers as never,
                {
                  selectedDay: day.dateString,
                } as never,
              );
            }
          }}
          minDate={firstDayInPreviousMonth()}
        />
        <AgendaList
          sections={trackers}
          ListHeaderComponent={loaderIndicator}
          renderItem={renderItem}
          sectionStyle={styles.section}
          contentContainerStyle={styles.listStyle}
          ListEmptyComponent={emptyComponent}
          keyExtractor={item => item.id}
        />
      </CalendarProvider>
    </View>
  );
};

export default Home;
