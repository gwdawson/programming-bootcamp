import { ScrollView, Image, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { GeneralStyles, SignInStyles } from '../styles/Styles';
import { useState } from 'react';
import { postUser } from '../utils/api';

export default function SignIn({ setLoggedIn, setPage, setUser }) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Password2, setPassword2] = useState('');

  const signIn = async () => {
    const makeAsync = async () => {
      if (Password !== Password2) {
        Alert.alert('Passwords do not match');
        return;
      }

      Alert.alert(
        'DISCLAIMER',
        'The information on this app is intended for use solely by yourself and can only be as accurate as the data inputted. If you are ever in any doubt about information you read or you are unsure what to do, you should consult a qualified medical practitioner, such as your own GP. While every effort has been made to ensure that the information contained on this app is correct and up-to-date, this cannot be guaranteed. The creators of this app cannot be held responsible for harm, loss or damage resulting from inaccuracies, or actions taken by persons in response to using Prescription Prompt.',
        [{ text: 'ACCEPT', style: 'default' }]
      );

      const data = await postUser(FirstName, LastName, Email, Password);
      setUser(data.user);
      setLoggedIn(true);
      setPage('Homepage');
    };
    makeAsync();
  };

  return (
    <ScrollView
      style={[GeneralStyles.fullScreen, GeneralStyles.mt50, { marginBottom: Platform.OS === 'ios' ? 400 : 0 }]}
    >
      <View style={[GeneralStyles.card, GeneralStyles.cardSmall, GeneralStyles.mb20]}>
        <Image style={SignInStyles.image} source={require('../assets/logo.png')} />
      </View>
      <View style={[GeneralStyles.card, GeneralStyles.mb20]}>
        <TextInput
          style={GeneralStyles.textInput}
          placeholder='First Name'
          autoCapitalize='none'
          value={FirstName}
          onChange={(e) => setFirstName(e.nativeEvent.text)}
        ></TextInput>

        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Last Name'
          autoCapitalize='none'
          value={LastName}
          onChange={(e) => setLastName(e.nativeEvent.text)}
        ></TextInput>

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

        <TextInput
          style={GeneralStyles.textInput}
          placeholder='Retype Password'
          autoCapitalize='none'
          secureTextEntry={true}
          value={Password2}
          onChange={(e) => setPassword2(e.nativeEvent.text)}
        ></TextInput>

        <TouchableOpacity style={GeneralStyles.outlineBtn} onPress={() => signIn()}>
          <Text style={GeneralStyles.outlineBtnText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      <Text style={[GeneralStyles.blue, GeneralStyles.bold, GeneralStyles.textCenter, GeneralStyles.mb5]}>
        Already have an account?
      </Text>
      <View style={[GeneralStyles.half, GeneralStyles.center]}>
        <TouchableOpacity onPress={() => setPage('SignIn')} style={GeneralStyles.btn}>
          <Text style={GeneralStyles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
