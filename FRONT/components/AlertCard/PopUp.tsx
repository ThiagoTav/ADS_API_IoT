import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const AlertPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Adicione um temporizador para fechar automaticamente o pop-up após alguns segundos
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Fechar após 5 segundos

    // Limpar o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, []); // Executar apenas uma vez quando o componente é montado

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null; // Se showPopup for falso, não renderizar nada
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showPopup}
      onRequestClose={handlePopupClose}>
      <TouchableWithoutFeedback onPress={handlePopupClose}>
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <Text style={styles.alertText}>Atenção! Chegou um Alerta!</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertText: {
    color: '#1A2533',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AlertPopup;