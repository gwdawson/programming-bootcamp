import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { getPrescriptionList } from '../utils/api';
import { GeneralStyles } from '../styles/Styles';

const MedicationList = ({ User }) => {
  const [medicationList, setMedicationList] = useState([]);

  useEffect(() => {
    getPrescriptionList(User._id).then((res) => {
      setMedicationList(res);
    });
  }, []);

  return (
    <View>
      <ScrollView>
        {medicationList.map((medicine) => {
          return (
            <View key={medicine.name + Math.random()} style={GeneralStyles.card}>
              <Text style={[GeneralStyles.cardSubTitle, GeneralStyles.white]}>Prescription List</Text>
              <Text style={[GeneralStyles.white, GeneralStyles.bold]}>Name:</Text>
              <Text
                style={[
                  GeneralStyles.fontMed,
                  GeneralStyles.white,
                  GeneralStyles.bold,
                  GeneralStyles.borderBottom,
                  GeneralStyles.pb5,
                ]}
              >
                {medicine.name}
              </Text>
              <Text style={[GeneralStyles.white, GeneralStyles.bold, GeneralStyles.mt10]}>Dosage:</Text>
              <Text
                style={[
                  GeneralStyles.fontMed,
                  GeneralStyles.white,
                  GeneralStyles.bold,
                  GeneralStyles.borderBottom,
                  GeneralStyles.pb5,
                ]}
              >
                {medicine.dosage}
              </Text>
              <Text style={[GeneralStyles.white, GeneralStyles.bold, GeneralStyles.mt10]}>Amount:</Text>
              <Text
                style={[
                  GeneralStyles.fontMed,
                  GeneralStyles.white,
                  GeneralStyles.bold,
                  GeneralStyles.borderBottom,
                  GeneralStyles.pb10,
                ]}
              >
                {medicine.amount}
              </Text>
              <Text style={[GeneralStyles.white, GeneralStyles.bold, GeneralStyles.mt10]}>Notes:</Text>
              <Text
                style={[
                  GeneralStyles.fontMed,
                  GeneralStyles.white,
                  GeneralStyles.bold,
                  GeneralStyles.borderBottom,
                  GeneralStyles.pb5,
                ]}
              >
                {medicine.notes}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  yes: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    marginBottom: 20,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default MedicationList;
