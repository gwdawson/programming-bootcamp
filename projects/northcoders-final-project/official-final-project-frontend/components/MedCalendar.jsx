import { Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { MedCalendarStyles, GeneralStyles } from '../styles/Styles';
import { getUserPrescriptions } from '../utils/api';

export default function MedCalendar({ user, setReminders, Reminders }) {
  const [Medication, setMedication] = useState([]);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const makeAsync = async () => {
      const data = await getUserPrescriptions(user);
      setMedication(data);
    };
    makeAsync();
  }, []);

  useEffect(() => {
    const reminders = [];
    for (let i = 0; i < Medication.length; i++) {
      for (let x = 0; x < Medication[i].amount; x++) {
        const tD = new Date(getDate(Medication[i].firstPromptTime, Medication[i].frequency, x, false));
        const timestampDate = new Date(
          getDate(Medication[i].firstPromptTime, Medication[i].frequency, x, false) + tD.getTimezoneOffset() * 60000
        );

        if (timestampDate >= Date.now()) {
          reminders.push(
            <View
              reminder={Medication[i]}
              time={getDate(Medication[i].firstPromptTime, Medication[i].frequency, x, false)}
              key={getDate(Medication[i].firstPromptTime, Medication[i].frequency, x, false) + i}
            >
              <View
                style={[
                  GeneralStyles.card,
                  GeneralStyles.cardWhite,
                  GeneralStyles.flex,
                  GeneralStyles.flexRow,
                  GeneralStyles.p10,
                ]}
              >
                <View
                  style={[
                    MedCalendarStyles.leftCol,
                    GeneralStyles.flex,
                    GeneralStyles.flexRow,
                    GeneralStyles.alignItemsCenter,
                  ]}
                >
                  <Text style={[MedCalendarStyles.leftColTitle, GeneralStyles.blue, GeneralStyles.bold]}>
                    {getDay(getDate(Medication[i].firstPromptTime, Medication[i].frequency, x, false))}
                  </Text>
                </View>
                <View style={MedCalendarStyles.rightCol}>
                  <View style={[GeneralStyles.flex, GeneralStyles.flexRow, GeneralStyles.alignItemsBase]}>
                    <Text style={[GeneralStyles.blue, GeneralStyles.fontMed, GeneralStyles.bold]}>
                      {Medication[i].name}
                    </Text>
                    <Text style={[GeneralStyles.blue, GeneralStyles.fontSmall, GeneralStyles.bold]}> at</Text>
                  </View>
                  <Text style={[GeneralStyles.blue, GeneralStyles.fontMed, GeneralStyles.bold]}>
                    {getDate(Medication[i].firstPromptTime, Medication[i].frequency, x, true)}
                  </Text>
                </View>
              </View>
            </View>
          );
        }
      }
    }

    reminders.sort((a, b) => a.key - b.key);

    function getDate(date, frequency, days, humanDate) {
      const addedDays = frequency * days;

      const result = date + addedDays;
      if (humanDate == true) {
        const humanTime = new Date(result * 1000);
        let humanMins = humanTime.getMinutes();
        if (humanMins < 10) {
          humanMins = '' + 0 + humanMins;
        }
        let humanHours = humanTime.getHours() + humanTime.getTimezoneOffset() / 60;
        humanHours === -1 ? (humanHours = 23) : humanHours;
        const humanDate =
          humanHours + ':' + humanMins + ' on ' + humanTime.getDate() + '/' + (humanTime.getMonth() + 1);

        return humanDate;
      } else {
        return result * 1000;
      }
    }
    function getDay(timestamp) {
      const tD = new Date(timestamp);

      const timestampDate = new Date(timestamp + tD.getTimezoneOffset() * 60000);
      const dN = Date.now();
      const dateNow = new Date(dN + new Date(dN).getTimezoneOffset() * 60000);
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = days[timestampDate.getDay()];
      const humanTimestampDate = '' + timestampDate.getFullYear() + timestampDate.getMonth() + timestampDate.getDate();
      const humanDateNow = '' + dateNow.getFullYear() + dateNow.getMonth() + dateNow.getDate();
      const timestampDateNum = parseInt(humanTimestampDate);
      const dateNowNum = parseInt(humanDateNow);

      if (timestampDateNum == dateNowNum) {
        return 'Today';
      } else if (timestampDateNum == dateNowNum + 1) {
        return 'Tomorrow';
      }
      return dayOfWeek;
    }
    setReminders(reminders);
  }, [Medication, time]);
  return (
    <View style={[GeneralStyles.card, MedCalendarStyles.height, MedCalendarStyles.card]}>
      <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>Prescription Calendar</Text>
      <ScrollView>{Reminders}</ScrollView>
    </View>
  );
}
