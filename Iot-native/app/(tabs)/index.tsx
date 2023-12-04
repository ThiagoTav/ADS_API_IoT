import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AlertCard } from '../../components/AlertCard/AlertCard';
import { ProfileCard } from '../../components/Profile/ProfileCard';

export default function TabOneScreen() {
  const [detailsVisible, setDetailsVisible] = useState(Array(4).fill(false));

  const handleAlertPress = (index) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ProfileCard nome={'User'} cidade={'Sorocaba-SP'} />
      <View style={styles.container}>
        {[0, 1, 2, 3].map((index) => (
          <AlertCard
            key={index}
            horario={'08:20'}
            X={'300'}
            Y={'150'}
            onDelete={() => console.log(`Excluir alerta ${index}`)}
            onPress={() => handleAlertPress(index)}
            showDetails={detailsVisible[index]}
          />
        ))}
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
    backgroundColor: '#1A2533', // Cor de fundo mais escura
    gap: 20,
    paddingVertical: 20,
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
