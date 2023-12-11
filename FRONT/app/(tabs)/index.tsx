import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Platform, Alert } from 'react-native'; // Importe Platform e Alert
import moment from 'moment';
import 'moment/locale/pt-br';
import { AlertCard, AlertProps } from '../../components/AlertCard/AlertCard';
import { ProfileCard } from '../../components/Profile/ProfileCard';
import axios from 'axios';
import AlertPopup from '../../components/AlertCard/PopUp';

const TabOneScreen: React.FC = () => {
  const [detailsVisible, setDetailsVisible] = useState<boolean[]>([]);
  const [alertComponents, setAlertComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get<AlertProps[]>('https://thiagotavares.pythonanywhere.com/api/dados-do-sensor/');
        const alerts = response.data;

        const todayAlerts = alerts.filter(alert =>
          moment(alert.timestamp).utcOffset(-3).isSame(moment(), 'day')
        );

        const alertCards = todayAlerts.map((alert, index) => (
          <AlertCard
            key={index}
            horario={moment(alert.timestamp).utcOffset(-3).format('HH:mm:ss')}
            X={alert.acceleration_x}
            Y={alert.acceleration_y}
            onDelete={() => handleDelete(index)}
            onPress={() => handleAlertPress(index)}
            showDetails={detailsVisible[index]}
          />
        ));

        setAlertComponents(alertCards);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    const subscribeToWebSocket = () => {
      const socket = new WebSocket('wss://thiagotavares.pythonanywhere.com/ws/external_data/');

      socket.onmessage = (event) => {
        const newAlert = JSON.parse(event.data) as AlertProps;

        if (moment(newAlert.timestamp).utcOffset(-3).isSame(moment(), 'day')) {
          setAlertComponents(prevAlerts => [
            ...prevAlerts,
            <AlertCard
              key={prevAlerts.length}
              horario={moment(newAlert.timestamp).utcOffset(-3).format('HH:mm:ss')}
              X={newAlert.acceleration_x}
              Y={newAlert.acceleration_y}
              onDelete={() => handleDelete(prevAlerts.length)}
              onPress={() => handleAlertPress(prevAlerts.length)}
              showDetails={detailsVisible[prevAlerts.length]}
            />
          ]);

          setDetailsVisible(prevVisible => [
            ...prevVisible,
            false,
          ]);

          // Adicione a notificação aqui
          showNotification();
        }
      };

      socket.onclose = (event) => {
      };
    };

    fetchDataFromAPI();
    subscribeToWebSocket();
  }, [detailsVisible]);

  useEffect(() => {
    setDetailsVisible(new Array(alertComponents.length).fill(false));
  }, [alertComponents]);

  const handleAlertPress = (index: number) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
  };

  const handleDelete = (index: number) => {
    console.log(`Excluir alerta ${index}`);
  };

  const limparAlertasAoMudarDeDia = () => {
    const today = moment().utcOffset(-3).format('YYYY-MM-DD');
    const todayAlerts = alertComponents.filter(alert =>
      moment((alert.props as AlertProps).horario).isSame(today, 'day')
    );
    setAlertComponents(todayAlerts);
  };

  useEffect(() => {
    limparAlertasAoMudarDeDia();
    const dailyCleanupInterval = setInterval(limparAlertasAoMudarDeDia, 24 * 60 * 60 * 1000);
    return () => clearInterval(dailyCleanupInterval);
  }, []);

  // Função para exibir notificação
  const showNotification = () => {
    if (Platform.OS === 'android') {
      // Configurar notificação para Android
      Alert.alert(
        'Novo Alerta!',
        'Um novo alerta foi gerado.',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    } else if (Platform.OS === 'ios') {
      // Configurar notificação para iOS
      // Adapte conforme necessário para a lógica de notificação iOS
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <AlertPopup />
      <ProfileCard nome={'User'} cidade={'Sorocaba-SP'} />
      <View style={styles.container}>
        {alertComponents}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A2533',
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

export default TabOneScreen;