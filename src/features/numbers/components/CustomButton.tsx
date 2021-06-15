import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export interface ICustomButton {
  title: string;
  onPress: () => void;
}

export default function CustomButton({title, onPress}: ICustomButton) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 4,
    width: '90%',
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'lightgreen',
    marginVertical: 15,
  },
  buttonTitleStyle: {
    fontSize: 14,
  },
});
