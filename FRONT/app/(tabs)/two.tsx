import React from 'react';
import { View, StyleSheet } from 'react-native';
import GraphicComponent from '../../components/Graphic/GraphicComponent'; // Certifique-se de ajustar o caminho de importação

const TabTwoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Aqui você integra o GraphicComponent diretamente na tela */}
      <GraphicComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A2533',
  },
});

export default TabTwoScreen;
