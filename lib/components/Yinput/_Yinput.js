import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const _Yinput = (props = {extraStyle: {}}) => {
  return (
    <TextInput
      placeholderTextColor={'#c0a9d0'}
      style={[styles.input, props.extraStyle]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#c1a6d2',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    color: '#776881',
    fontWeight: '600',
    fontSize: 15,
    height: 50,
  },
});

export default _Yinput;
