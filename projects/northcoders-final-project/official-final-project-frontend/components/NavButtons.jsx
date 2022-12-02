import { View } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { GeneralStyles } from '../styles/Styles';

export default function NavButtons({ setPage }) {
  return (
    <View style={[GeneralStyles.flex, GeneralStyles.flexRow]}>
      <TouchableOpacity
        style={[GeneralStyles.card, GeneralStyles.cardHalf, GeneralStyles.cardHalfLeft]}
        onPress={() => setPage('AddMedication')}
      >
        <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>Add Prescription</Text>
        <Text style={[GeneralStyles.fontMed, GeneralStyles.white, GeneralStyles.bold]}>Add a new medication</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[GeneralStyles.card, GeneralStyles.cardHalf, GeneralStyles.cardHalfRight]}
        onPress={() => setPage('MedicationList')}
      >
        <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>List Prescriptions</Text>
        <Text style={[GeneralStyles.fontMed, GeneralStyles.white, GeneralStyles.bold]}>See all Prescriptions</Text>
      </TouchableOpacity>
    </View>
  );
}
