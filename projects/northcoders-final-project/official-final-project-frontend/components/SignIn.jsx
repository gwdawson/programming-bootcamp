import { ScrollView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GeneralStyles, SignInStyles } from '../styles/Styles';
import { useState } from 'react';
import { getUserByEmail } from '../utils/api';

export default function SignIn({ setLoggedIn, setPage, setUser }) {
  // Set default Email and Password for testing
  const [Email, setEmail] = useState('lacus@hotmail.edu');
  const [Password, setPassword] = useState('DEO28HDM4DF');

  const SignIn = async () => {
    const makeAsync = async () => {
      const data = await getUserByEmail(Email);
      if (Password === data.user.password) {
        setUser(data.user);
        setLoggedIn(true);
        setPage('Homepage');
      }
    };
    makeAsync();
  };

  return (
    <ScrollView
      style={[GeneralStyles.fullScreen, GeneralStyles.mt50, { marginBottom: Platform.OS === 'ios' ? 400 : 0 }]}
    >
      <ScrollView style={[GeneralStyles.card, GeneralStyles.cardSmall, GeneralStyles.mb20]}>
        <Image style={SignInStyles.image} source={require('../assets/logo.png')} />
      </ScrollView>
      <View style={[GeneralStyles.card, GeneralStyles.mb20]}>
        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Email Address'
          autoCapitalize='none'
          value={Email}
          onChange={(e) => setEmail(e.nativeEvent.text)}
        ></TextInput>

        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry={true}
          value={Password}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        ></TextInput>

        <TouchableOpacity style={GeneralStyles.outlineBtn} onPress={() => SignIn()}>
          <Text style={GeneralStyles.outlineBtnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={[GeneralStyles.half, GeneralStyles.center]}>
        <Text style={[GeneralStyles.blue, GeneralStyles.bold, GeneralStyles.textCenter, GeneralStyles.mb5]}>
          Dont have an account?
        </Text>
        <TouchableOpacity onPress={() => setPage('SignUp')} style={GeneralStyles.btn}>
          <Text style={GeneralStyles.btnText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
