import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

interface IBPInputProps {
  onChangeText: (text: string) => void;
  title: string;
  disabled?: boolean;
  value?: string;
}

const BPInput = (props: IBPInputProps) => {
  const {title, onChangeText, value, disabled} = props;
  return (
    <View style={styles.BPContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder={title}
        value={value}
        editable={!disabled}
        inputMode={'numeric'}
        returnKeyType={'done'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default BPInput;
