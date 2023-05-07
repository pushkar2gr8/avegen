import moment from 'moment';
import {getMarkedDates} from './agendaItems';
import firestore from '@react-native-firebase/firestore';
import {useQuery} from 'react-query';
import {getData} from '../../components/storage';
import {Constants} from '../../assets/constants';

const useCalenderData = () => {
  const getTrackers = async () => {
    return await firestore()
      .collection(getData(Constants.mobile))
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => {
          return doc.data();
        }),
      );
  };

  const {
    isLoading,
    data = [],
    refetch,
  } = useQuery('trackers', getTrackers, {
    retry: 0,
  });

  const firstDayInPreviousMonth = () => {
    var d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - 1);
    return moment(d).format('YYYY-MM-DD');
  };

  return {
    firstDayInPreviousMonth,
    trackers: data,
    marked: getMarkedDates(data),
    refetch,
    isLoading,
  };
};

export default useCalenderData;
