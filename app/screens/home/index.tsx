import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import {Constants} from '../../assets/constants';
import AgendaItem from '../../components/agendaItem';
import {agendaItems} from './agendaItems';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const ITEMS = agendaItems;

  const renderItem = ({item}: any) => {
    return (
      <AgendaItem
        item={item}
        onPress={() => navigation.navigate(Constants.Trackers as never)}
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

  return (
    <View style={styles.container}>
      <CalendarProvider date={ITEMS[1]?.title} showTodayButton>
        <ExpandableCalendar firstDay={1} />
        <AgendaList
          sections={[]}
          renderItem={renderItem}
          sectionStyle={styles.section}
          contentContainerStyle={styles.listStyle}
          ListEmptyComponent={emptyComponent}
        />
      </CalendarProvider>
    </View>
  );
};

export default Home;
