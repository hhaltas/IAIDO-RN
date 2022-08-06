import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import KeyboardFixes from '../../lib/KeyboardFixes';
import {vh} from 'react-native-css-vh-vw';
import {Yinput, BigButton} from '../../lib/components/Form';
import {center} from '../../lib/styles/other';
import {codeBlue, codeGreen} from '../../lib/styles/color';
import {ValidateEmail} from '../../lib/util/helper';
import {DelayAlert} from '../../lib/util/HubAlert';
import RNProgressHud from 'progress-hud';

const windowHeight = Dimensions.get('window').height;
const ProgressHUDMaskType = RNProgressHud.ProgressHUDMaskType;

const Login = props => {
  const [email, setEmail] = useState('Hasan@gmail.com');
  const [password, setPassword] = useState('123456');
  const onLogin = () => {
    let email1 = email.trim();
    let password1 = password.trim();
    if (email1 === '') {
      // DelayAlert(() =>
      //   RNProgressHud.showErrorWithStatus(
      //     'Email Boş Olamaz',
      //     ProgressHUDMaskType.Clear,
      //   ),
      // );
      return;
    }
    if (!ValidateEmail(email1)) {
      // DelayAlert(() =>
      //   RNProgressHud.showErrorWithStatus(
      //     'Geçerli email giriniz',
      //     ProgressHUDMaskType.Clear,
      //   ),
      // );
      return;
    }
    if (password1 === '') {
      // DelayAlert(() =>
      //   RNProgressHud.showErrorWithStatus(
      //     'şifre boş olamaz',
      //     ProgressHUDMaskType.Clear,
      //   ),
      // );
      return;
    }
    //RNProgressHud.showWithStatus('yükleniyor');
    if (email1 === 'Hasan@gmail.com' && password1 === '123456') {
      props.navigation.navigate('Home');
    } else {
      //DelayAlert(() => RNProgressHud.showErrorWithStatus('Giriş başarısız.!'));
      return;
    }
  };

  const goRegister = () => {
    console.log('Kayıt ol');
  };

  return (
    <SafeAreaView style={{borderColor: 'red', borderWidth: 1, flex: 1}}>
      <KeyboardFixes>
        <View
          style={{
            height: windowHeight,
            borderColor: 'yellow',
            borderWidth: 1,
          }}>
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
                {/* <View style={styles.forgot}>
                  <Text
                    onPress={() => goPasswordReset()}
                    style={styles.forgotPassword}>
                    şifremi unuttum
                  </Text>
                </View> */}
              </View>
              <View style={styles.logined}>
                <BigButton bgColor={codeBlue} onPress={() => onLogin()}>
                  Login
                </BigButton>
                <View
                  style={[
                    styles.topSub,
                    {marginTop: 10, marginBottom: 5},
                  ]}></View>
                <BigButton bgColor={codeGreen} onPress={() => goRegister()}>
                  Register
                </BigButton>
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
    width: '95%',
    margin: 10,
    ...center,
  },
  form: {
    flex: 1,
    width: '100%',
    marginTop: vh(1),
  },
  password: {
    marginTop: vh(2),
  },
  logined: {
    marginTop: vh(2),
  },
});
