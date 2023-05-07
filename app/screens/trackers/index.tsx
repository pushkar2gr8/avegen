import {isEmpty} from 'lodash';
import * as React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import BPInput from '../../components/BPInput';
import MoodIndicator from '../../components/moodIndicator';
import useTrackerData from './hooks';
import {styles} from './styles';

const Trackers = () => {
  const {
    setDiastolicData,
    setSystolicData,
    setMood,
    mood,
    systolicData,
    diastolicData,
    tracker,
    disabled,
    onSave,
  } = useTrackerData();

  const onPress = () => {
    if (systolicData !== '' && diastolicData !== '' && !isEmpty(mood)) {
      onSave();
    } else {
      Alert.alert('Please select your mood and BP');
    }
  };

  return (
    <View style={styles.container}>
      <MoodIndicator
        mood={mood}
        onPress={item => setMood(item)}
        disabled={disabled}
      />
      <View style={[styles.container, styles.BPContainer]}>
        <BPInput
          title="Systolic BP"
          onChangeText={(text: string) => setSystolicData(text)}
          disabled={disabled}
          value={tracker?.systolicData}
        />
        <Text style={{fontSize: 16}}>/</Text>
        <BPInput
          title="Diastolic BP"
          onChangeText={(text: string) => setDiastolicData(text)}
          disabled={disabled}
          value={tracker?.diastolicData}
        />
      </View>
      {isEmpty(tracker) && <Button title="Save" onPress={onPress} />}
    </View>
  );
};

export default Trackers;
