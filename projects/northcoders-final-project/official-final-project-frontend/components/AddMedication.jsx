import { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { GeneralStyles, AddMedicationStyles, MedCalendarStyles } from '../styles/Styles';
import RNPickerSelect from 'react-native-picker-select';
import { postPrescription } from '../utils/api';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import storage from '@react-native-async-storage/async-storage';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function AddMedication({ User }) {
  const [Medication, setMedication] = useState('');
  const [Dosage, setDosage] = useState('');
  const [Unit, setUnit] = useState('');
  const [Amount, setAmount] = useState('');
  const [Type, setType] = useState('');
  const [Frequency, setFrequency] = useState('');
  const [Period, setPeriod] = useState('');
  const [FormDate, setFormDate] = useState('');
  const [Month, setMonth] = useState('');
  const [Time, setTime] = useState('');
  const [Note, setNote] = useState('');
  const [Prescription, setPrescription] = useState({});
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const getPermission = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Please Enable Push Notifications to use the App!');
          await storage.setItem('expopushtoken', '');
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await storage.setItem('expopushtoken', token);
      } else {
        alert('Must Use Physical Device for Push Notifications!');
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    };

    getPermission();

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handleSubmit = async () => {
    let increment = undefined;
    if (Period === 'hour') increment = 3600;
    if (Period === 'day') increment = 86400;
    if (Period === 'week') increment = 604800;
    const firstDose =
      Date.UTC(new Date().getFullYear(), Month, FormDate, parseInt(Time.substring(0, 2)), parseInt(Time.slice(-2)), 0) /
      1000;

    setPrescription({
      medication: Medication,
      dosage: parseInt(Dosage),
      unit: Unit,
      amount: parseInt(Amount),
      type: Type,
      frequency: Frequency * increment,
      period: Period,
      firstDose: firstDose,
      note: Note,
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Medication Alert',
        body: `It's time to take your ${Medication}!`,
        data: { data: Note },
      },
      trigger: {
        seconds: Frequency * increment,
        repeats: true,
      },
    });
  };

  const clearMedication = () => {
    setMedication('');
    setDosage('');
    setUnit('');
    setAmount('');
    setType('');
    setAmount('');
    setFrequency('');
    setPeriod('');
    setFormDate('');
    setMonth('');
    setTime('');
    setNote('');
  };

  const SendAlert = (e) => Alert.alert('ERROR', e, [{ text: 'OK', style: 'default' }]);
  const SuccessAlert = (e) => Alert.alert('SUCCESS', e, [{ text: 'OK', style: 'default' }]);

  useEffect(() => {
    if (Prescription?.medication?.length < 1) {
      SendAlert('Please enter a Medication.');
    } else if (isNaN(Prescription?.dosage) && Prescription?.dosage !== undefined) {
      SendAlert('Please enter a Dosage.');
    } else if (Prescription?.unit?.length < 1) {
      SendAlert('Please enter a Unit.');
    } else if (isNaN(Prescription.amount) && Prescription.amount !== undefined) {
      SendAlert('Please enter a Quantity.');
    } else if (Prescription?.type?.length < 1) {
      SendAlert('Please enter a Type.');
    } else if (false) {
      // TODO: Fix frequency validation
      SendAlert('Please enter a Frequency.');
    } else if (Prescription?.FormDate?.length < 1) {
      SendAlert('Please enter a Date.');
    } else if (Prescription?.month?.length < 1) {
      SendAlert('Please enter a Month.');
    } else if (Prescription?.time?.length < 1) {
      SendAlert('Please enter a Time.');
    } else if (Prescription?.period?.length < 1) {
      SendAlert('Please enter a Period.');
    } else {
      if (Object.keys(Prescription).length > 0) {
        postPrescription({
          name: Prescription.medication,
          dosage: Prescription.dosage + ' ' + Prescription.unit,
          frequency: Prescription.frequency,
          firstPromptTime: Prescription.firstDose,
          notes: Prescription.note,
          userId: User._id,
          amount: Prescription.amount,
        })
          .then((prescription) => {
            SuccessAlert('This prescription has been added.');
            clearMedication();
          })
          .catch((err) => {
            SendAlert('Something went wrong and we were unable to save your prescription, please try again.');
            console.log(err);
          });
      }
    }
  }, [Prescription]);

  return (
    <View style={GeneralStyles.card}>
      <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>Add Prescription</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={AddMedicationStyles.inputLabel}>Medication Name</Text>
          <TextInput
            style={[AddMedicationStyles.input]}
            placeholder='Medication'
            value={Medication}
            onChange={(e) => setMedication(e.nativeEvent.text)}
          />

          <View style={[GeneralStyles.flex, GeneralStyles.flexRow, AddMedicationStyles.split]}>
            <View style={AddMedicationStyles.splitLeft}>
              <Text style={AddMedicationStyles.inputLabel}>Dosage</Text>
              <TextInput
                style={[AddMedicationStyles.input, AddMedicationStyles.splitLeftInput]}
                placeholder='Dosage'
                value={Dosage}
                keyboardType='numeric'
                contextMenuHidden={true}
                onChange={(e) => setDosage(e.nativeEvent.text)}
              ></TextInput>
            </View>
            <View style={AddMedicationStyles.splitRight}>
              <Text style={AddMedicationStyles.inputLabel}>Unit</Text>
              <View style={AddMedicationStyles.splitRightInput}>
                <RNPickerSelect
                  onValueChange={(value) => setUnit(value)}
                  placeholder={{ label: 'Select a unit' }}
                  value={Unit}
                  items={[
                    { label: 'Milligrams (Mg)', value: 'milligrams' },
                    { label: 'Grams (g)', value: 'grams' },
                    { label: 'Millilitres (ml)', value: 'millilitres' },
                    { label: 'Litres (L)', value: 'litres' },
                    { label: 'Micrograms (µg)', value: 'micrograms' },
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={[GeneralStyles.flex, GeneralStyles.flexRow, AddMedicationStyles.split]}>
            <View style={AddMedicationStyles.splitLeft}>
              <Text style={AddMedicationStyles.inputLabel}>Quantity</Text>

              <TextInput
                style={[AddMedicationStyles.input, AddMedicationStyles.splitLeftInput]}
                contextMenuHidden={true}
                keyboardType='numeric'
                placeholder='Quantity'
                value={Amount}
                onChange={(e) => setAmount(e.nativeEvent.text)}
              ></TextInput>
            </View>
            <View style={AddMedicationStyles.splitRight}>
              <Text style={AddMedicationStyles.inputLabel}>Type</Text>
              <View style={AddMedicationStyles.splitRightInput}>
                <RNPickerSelect
                  onValueChange={(value) => setType(value)}
                  placeholder={{ label: 'Select a type' }}
                  value={Type}
                  items={[
                    { label: 'Tablets', value: 'tablets' },
                    { label: 'Liquid', value: 'liquid' },
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={[GeneralStyles.flex, GeneralStyles.flexRow, AddMedicationStyles.split]}>
            <View style={AddMedicationStyles.splitLeft}>
              <Text style={AddMedicationStyles.inputLabel}>Frequency</Text>

              <TextInput
                style={[AddMedicationStyles.input, AddMedicationStyles.splitLeftInput]}
                contextMenuHidden={true}
                keyboardType='numeric'
                placeholder='Frequency'
                value={Frequency}
                onChange={(e) => setFrequency(e.nativeEvent.text)}
              ></TextInput>
            </View>
            <View style={AddMedicationStyles.splitRight}>
              <Text style={AddMedicationStyles.inputLabel}>Unit</Text>
              <View style={AddMedicationStyles.splitRightInput}>
                <RNPickerSelect
                  onValueChange={(value) => setPeriod(value)}
                  placeholder={{ label: 'Select a period' }}
                  value={Period}
                  items={[
                    { label: 'Hour', value: 'hour' },
                    { label: 'Day', value: 'day' },
                    { label: 'Week', value: 'week' },
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={[GeneralStyles.flex, GeneralStyles.flexRow, AddMedicationStyles.split]}>
            <View style={[AddMedicationStyles.splitThird]}>
              <Text style={AddMedicationStyles.inputLabel}>Date</Text>
              <View style={[AddMedicationStyles.splitThirdInput, AddMedicationStyles.splitThirdLeft]}>
                <RNPickerSelect
                  onValueChange={(value) => setFormDate(value)}
                  placeholder={{ label: 'First Date' }}
                  value={FormDate}
                  items={[
                    { label: '1st', value: 1 },
                    { label: '2nd', value: 2 },
                    { label: '3rd', value: 3 },
                    { label: '4th', value: 4 },
                    { label: '5th', value: 5 },
                    { label: '6th', value: 6 },
                    { label: '7th', value: 7 },
                    { label: '8th', value: 8 },
                    { label: '9th', value: 9 },
                    { label: '10th', value: 10 },
                    { label: '11th', value: 11 },
                    { label: '12th', value: 12 },
                    { label: '13th', value: 13 },
                    { label: '14th', value: 14 },
                    { label: '15th', value: 15 },
                    { label: '16th', value: 16 },
                    { label: '17th', value: 17 },
                    { label: '18th', value: 18 },
                    { label: '19th', value: 19 },
                    { label: '20th', value: 20 },
                    { label: '21st', value: 21 },
                    { label: '22nd', value: 22 },
                    { label: '23nd', value: 23 },
                    { label: '24th', value: 24 },
                    { label: '25th', value: 25 },
                    { label: '26th', value: 26 },
                    { label: '27th', value: 27 },
                    { label: '28th', value: 28 },
                    { label: '29th', value: 29 },
                    { label: '30th', value: 30 },
                    { label: '31st', value: 31 },
                  ]}
                />
              </View>
            </View>
            <View style={[AddMedicationStyles.splitThird]}>
              <Text style={AddMedicationStyles.inputLabel}>Month</Text>
              <View style={[AddMedicationStyles.splitThirdInput, AddMedicationStyles.splitThirdMid]}>
                <RNPickerSelect
                  onValueChange={(value) => setMonth(value)}
                  placeholder={{ label: 'First Month' }}
                  value={Month}
                  items={[
                    { label: 'January', value: 0 },
                    { label: 'February', value: 1 },
                    { label: 'March', value: 2 },
                    { label: 'April', value: 3 },
                    { label: 'May', value: 4 },
                    { label: 'June', value: 5 },
                    { label: 'July', value: 6 },
                    { label: 'August', value: 7 },
                    { label: 'September', value: 8 },
                    { label: 'October', value: 9 },
                    { label: 'November', value: 10 },
                    { label: 'December', value: 11 },
                  ]}
                />
              </View>
            </View>
            <View style={[AddMedicationStyles.splitThird]}>
              <Text style={AddMedicationStyles.inputLabel}>Time</Text>
              <View style={[AddMedicationStyles.splitThirdInput, AddMedicationStyles.splitThirdRight]}>
                <RNPickerSelect
                  onValueChange={(value) => setTime(value)}
                  placeholder={{ label: 'First Time' }}
                  value={Time}
                  items={[
                    { label: '00:00', value: '00:00' },
                    { label: '00:30', value: '00:30' },
                    { label: '01:00', value: '01:00' },
                    { label: '01:30', value: '01:30' },
                    { label: '02:00', value: '02:00' },
                    { label: '02:30', value: '02:30' },
                    { label: '03:00', value: '03:00' },
                    { label: '03:30', value: '03:30' },
                    { label: '04:00', value: '04:00' },
                    { label: '04:30', value: '04:30' },
                    { label: '05:00', value: '05:00' },
                    { label: '05:30', value: '05:30' },
                    { label: '06:00', value: '06:00' },
                    { label: '06:30', value: '06:30' },
                    { label: '07:00', value: '07:00' },
                    { label: '07:30', value: '07:30' },
                    { label: '08:00', value: '08:00' },
                    { label: '08:30', value: '08:30' },
                    { label: '09:00', value: '09:00' },
                    { label: '09:30', value: '09:30' },
                    { label: '10:00', value: '10:00' },
                    { label: '10:30', value: '10:30' },
                    { label: '11:00', value: '11:00' },
                    { label: '11:30', value: '11:30' },
                    { label: '12:00', value: '12:00' },
                    { label: '12:30', value: '12:30' },
                    { label: '13:00', value: '13:00' },
                    { label: '13:30', value: '13:30' },
                    { label: '14:00', value: '14:00' },
                    { label: '14:30', value: '14:30' },
                    { label: '15:00', value: '15:00' },
                    { label: '15:30', value: '15:30' },
                    { label: '16:00', value: '16:00' },
                    { label: '16:30', value: '16:30' },
                    { label: '17:00', value: '17:00' },
                    { label: '17:30', value: '17:30' },
                    { label: '18:00', value: '18:00' },
                    { label: '18:30', value: '18:30' },
                    { label: '19:00', value: '19:00' },
                    { label: '19:30', value: '19:30' },
                    { label: '20:00', value: '20:00' },
                    { label: '20:30', value: '20:30' },
                    { label: '21:00', value: '21:00' },
                    { label: '21:30', value: '21:30' },
                    { label: '22:00', value: '22:00' },
                    { label: '22:30', value: '22:30' },
                    { label: '23:00', value: '23:00' },
                    { label: '23:30', value: '23:30' },
                  ]}
                />
              </View>
            </View>
          </View>
          <Text style={AddMedicationStyles.inputLabel}>Notes</Text>
          <TextInput
            style={AddMedicationStyles.input}
            placeholder='Note'
            value={Note}
            maxLength={255}
            onChange={(e) => setNote(e.nativeEvent.text)}
          ></TextInput>

          <View style={[GeneralStyles.flex, GeneralStyles.flexRow]}>
            <TouchableOpacity style={AddMedicationStyles.submitButton} onPress={() => handleSubmit()}>
              <Text style={[GeneralStyles.white, GeneralStyles.bold, GeneralStyles.textCenter]}>Add Medication</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AddMedicationStyles.clearButton} onPress={() => clearMedication()}>
              <Text style={[GeneralStyles.white, GeneralStyles.bold, GeneralStyles.textCenter]}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
