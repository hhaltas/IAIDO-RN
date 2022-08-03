import React from 'react';
import {Platform, KeyboardAvoidingView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const KeyboardFixed = props => {
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAwareScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        {...props}
      />
    );
  }

  return <KeyboardAwareScrollView>{props.children}</KeyboardAwareScrollView>;
};

export default KeyboardFixed;
