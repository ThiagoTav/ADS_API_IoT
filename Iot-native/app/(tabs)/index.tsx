import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AlertCard } from '../../components/AlertCard/AlertCard';
import { ProfileCard } from '../../components/Profile/ProfileCard';

export default function TabOneScreen() {
  const [detailsVisible, setDetailsVisible] = useState(Array(4).fill(false)); // Inicializa um array de estados para controlar a visibilidade dos detalhes

  const handleAlertPress = (index) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ProfileCard nome={'Victor'} cidade={'Votorantim-SP'} />
      <View style={styles.container}>
        {[0, 1, 2, 3].map((index) => (
          <AlertCard
            key={index}
            horario={'08:20'}
            X={'300'}
            Y={'150'}
            onDelete={() => console.log(`Excluir alerta ${index}`)} // Adicione a lógica de exclusão conforme necessário
            onPress={() => handleAlertPress(index)} // Adiciona a lógica para mostrar/ocultar detalhes
            showDetails={detailsVisible[index]} // Passa o estado de visibilidade dos detalhes
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
