import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardFixes from '../../lib/KeyboardFixes';
import {vh} from 'react-native-css-vh-vw';
import {Yinput} from '../../lib/components/Form';
import {center} from '../../lib/styles/other';
const Login = props => {
  const [email, setEmail] = useState('Hasan');
  const [password, setPassword] = useState('123456');
  return (
    <SafeAreaView style={{borderColor: 'red', borderWidth: 1, flex: 1}}>
      <KeyboardFixes>
        <View style={{}}>
          <View style={styles.container}>
            <View style={styles.form}>
              <View>
                <Yinput
                  placeholder={'Email...'}
                  value={email}
                  onChangeText={email => setEmail(email)}
                  autoCompleteType="email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.password}>
                <Yinput
                  placeholder={'password...'}
                  value={password}
                  onChangeText={password => {
                    setPassword(password);
                  }}
                  secureTextEntry={true}
                />
                <View style={styles.forgot}>
                  <Text
                    onPress={() => goPasswordReset()}
                    style={styles.forgotPassword}>
                    şifremi unuttum
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardFixes>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 10,
  },
  form: {
    marginTop: vh(1),
  },
  password: {
    marginTop: vh(2),
  },
});
