import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Constants} from '../assets/constants';
import {styles} from './styles';

interface IMoodIndicatorProps {
  onPress: (item: any) => void;
  mood: any;
  disabled?: boolean;
}

const MoodIndicator = (props: IMoodIndicatorProps) => {
  const {onPress, mood, disabled = false} = props;

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={mood.title === item.title ? styles.selectedMood : styles.mood}
        onPress={() => onPress(item)}
        disabled={disabled}>
        <Image
          style={styles.moodIcon}
          resizeMethod="resize"
          resizeMode="contain"
          source={item.icon}
        />
        <Text style={{color: 'black'}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.moodListContainer}
        numColumns={3}
        data={Constants.Moods}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MoodIndicator;
