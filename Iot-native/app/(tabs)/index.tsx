import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../../components/Themed';
import { AlertCard } from '../../components/AlertCard/AlertCard';
import { ProfileCard } from '../../components/Profile/ProfileCard';
import axios from 'axios';

export default function TabOneScreen() {
  const [detailsVisible, setDetailsVisible] = useState([]);
  const [alertComponents, setAlertComponents] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('https://thiagotavares.pythonanywhere.com/api/dados-do-sensor/');
        const alerts = response.data;

        // Criar instâncias de AlertCard a partir dos dados recebidos
        const alertCards = alerts.map((alert, index) => (
          <AlertCard
            key={index}
            horario={alert.horario}
            X={alert.X}
            Y={alert.Y}
            onDelete={() => console.log(`Excluir alerta ${index}`)}
            onPress={() => handleAlertPress(index)}
            showDetails={detailsVisible[index]}
          />
        ));

        // Atualizar o estado local com as instâncias de AlertCard
        setAlertComponents(alertCards);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    const subscribeToWebSocket = () => {
      const socket = new WebSocket('wss://thiagotavares.pythonanywhere.com/ws/external_data/');

      socket.onmessage = (event) => {
        const newAlert = JSON.parse(event.data);

        // Atualizar o estado local para incluir o novo AlertCard
        setAlertComponents(prevAlerts => [
          ...prevAlerts,
          <AlertCard
            key={prevAlerts.length}
            horario={newAlert.horario}
            X={newAlert.X}
            Y={newAlert.Y}
            onDelete={() => console.log(`Excluir alerta ${prevAlerts.length}`)}
            onPress={() => handleAlertPress(prevAlerts.length)}
            showDetails={detailsVisible[prevAlerts.length]}
          />
        ]);
      };

      socket.onclose = (event) => {
        console.log('Conexão WebSocket fechada:', event.reason);
      };
    };

    fetchDataFromAPI();
    subscribeToWebSocket();
  }, []);


  useEffect(() => {
    setDetailsVisible(new Array(alertComponents.length).fill(false));
  }, [alertComponents]);

  const handleAlertPress = (index) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ProfileCard nome={'User'} cidade={'Sorocaba-SP'} />
      <View style={styles.container}>
        {alertComponents}
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