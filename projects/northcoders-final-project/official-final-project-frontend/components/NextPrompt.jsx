import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { GeneralStyles, NextPromptStyles } from '../styles/Styles';
import msToTime from '../utils/msToTime';

export default function NextPrompt({ Reminders }) {
  const [MedicationName, setMedicationName] = useState('MedicationName');
  const [MedicationDosage, setMedicationDosage] = useState('XXmg');
  const [Timer, setTimer] = useState('XX');

  useEffect(() => {
    setMedicationDosage(Reminders?.[0]?.props?.reminder.dosage);
    setMedicationName(Reminders?.[0]?.props?.reminder.name);
    const tD = new Date(Reminders?.[0]?.props?.time);
    const timestampDate = new Date(Reminders?.[0]?.props?.time + tD.getTimezoneOffset() * 60000);
    setTimer(msToTime(timestampDate - Date.now()));
  }, [Reminders]);

  return (
    <View style={GeneralStyles.card}>
      {/* <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>Prescription Prompt</Text> */}
      <Text style={[GeneralStyles.white, GeneralStyles.bold]}>Remember to take {MedicationDosage} of</Text>
      <Text style={[GeneralStyles.fontLarge, GeneralStyles.white]}>{MedicationName}</Text>
      <View style={[GeneralStyles.flex, GeneralStyles.flexRow]}>
        <Text style={GeneralStyles.white}>in </Text>
        <Text style={[GeneralStyles.fontLarge, GeneralStyles.white]}>{Timer}</Text>
      </View>
    </View>
  );
}
