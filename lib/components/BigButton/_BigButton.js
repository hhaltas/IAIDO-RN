import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {center} from '../../styles/other';
import {Nunito} from '../../styles/font_family';

const _BigButton = ({
  onPress,
  buttonProps,
  textProps,
  buttonStyle,
  textStyle,
  children,
  bgColor,
  isText = true,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btn, {backgroundColor: bgColor}, buttonStyle]}
      onPress={onPress}
      {...buttonProps}>
      {isText ? (
        <Text style={[styles.btnText, textStyle]} {...textProps}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    padding: 15,
    ...center,
  },
  btnText: {
    color: '#ffffff',
    fontFamily: Nunito,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});

_BigButton.defaultProps = {
  buttonProps: {},
  textProps: {},
  buttonStyle: {},
  textStyle: {},
  bgColor: '#000000',
};

export default _BigButton;
