import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AlertCard } from '../../components/AlertCard/AlertCard';
import { ProfileCard } from '../../components/Profile/ProfileCard';

export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ProfileCard nome= {'Victor'} cidade={'Votorantim-SP'} />
      <View style={styles.container}>
        <AlertCard horario={'08:20'} X={'300'} Y={'150'} />
        <AlertCard horario={'08:20'} X={'300'} Y={'150'} />
        <AlertCard horario={'08:20'} X={'300'} Y={'150'} />
        <AlertCard horario={'08:20'} X={'300'} Y={'150'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 20,
    paddingVertical: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});