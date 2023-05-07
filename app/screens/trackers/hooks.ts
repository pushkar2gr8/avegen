import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getData} from '../../components/storage';
import {Constants} from '../../assets/constants';

const useTrackerData = () => {
  const {
    params: {
      selectedDay = moment(new Date()).format('YYYY-MM-DD'),
      tracker = {},
      disabled = false,
    },
  }: any = useRoute();
  const navigation = useNavigation();
  const [systolicData, setSystolicData] = useState('');
  const [diastolicData, setDiastolicData] = useState('');
  const [mood, setMood] = useState({title: tracker?.mood});

  const onSave = () => {
    firestore()
      .collection(getData(Constants.mobile))
      .add({
        title: selectedDay,
        marked: true,
        data: [
          {
            systolicData: systolicData,
            diastolicData: diastolicData,
            mood: mood?.title,
          },
        ],
      })
      .then(() => {
        Alert.alert('Tracker added!');
        navigation.goBack();
      });
  };

  return {
    systolicData,
    setSystolicData,
    diastolicData,
    setDiastolicData,
    mood,
    setMood,
    onSave,
    tracker,
    disabled,
  };
};

export default useTrackerData;
