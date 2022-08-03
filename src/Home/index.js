import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

import * as React from 'react';
const HomeIndex = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          console.log('this.props', props.navigation.navigate('Login'));
        }}
      />
    </SafeAreaView>
  );
};

export default HomeIndex;

const styles = StyleSheet.create({});
