import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { GeneralStyles, HeaderStyles } from '../styles/Styles';

export default function Header({ title, loggedIn, setLoggedIn, page, setPage }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changePage = (newPage) => {
    setPage(newPage);
    setMenuIsOpen(false);
  };

  const SignOut = () => {
    setPage('SignIn');
    setLoggedIn(false);
    setMenuIsOpen(false);
  };
  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.titleBar}>
        <View styles={HeaderStyles.leftContainer}>
          <Text style={HeaderStyles.title}>{title}</Text>
        </View>
        <View styles={HeaderStyles.rightContainer}>
          <TouchableOpacity
            style={page === 'SignIn' || page === 'SignUp' ? [] : [GeneralStyles.btn, HeaderStyles.btn]}
            onPress={() => setMenuIsOpen(!menuIsOpen)}
          >
            {!loggedIn ? null : <Text style={[GeneralStyles.btnText, GeneralStyles.fontMed]}>Menu</Text>}
          </TouchableOpacity>
        </View>
      </View>

      <View style={[HeaderStyles.menu, { display: menuIsOpen ? 'flex' : 'none' }]}>
        <TouchableOpacity style={[HeaderStyles.menuButton, { marginTop: 20 }]} onPress={() => changePage('Homepage')}>
          <Text style={[GeneralStyles.bold, GeneralStyles.white]}>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HeaderStyles.menuButton} onPress={() => changePage('AddMedication')}>
          <Text style={[GeneralStyles.bold, GeneralStyles.white]}>Add Medication</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HeaderStyles.menuButton} onPress={() => changePage('MedicationList')}>
          <Text style={[GeneralStyles.bold, GeneralStyles.white]}>Medication List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HeaderStyles.menuButton} onPress={() => SignOut()}>
          <Text style={[GeneralStyles.bold, GeneralStyles.white]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
