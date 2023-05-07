import isEmpty from 'lodash/isEmpty';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ItemProps {
  item: any;
  onPress: () => void;
}

const AgendaItem = (props: ItemProps) => {
  const {item, onPress} = props;

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Data Available</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View>
        <Text style={styles.BPText}>{item.systolicData}</Text>
        <Text style={styles.seperator} />
        <Text style={styles.BPText}>{item.diastolicData}</Text>
      </View>
      <Text style={styles.itemTitleText}>{item.mood}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);
