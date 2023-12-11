import React from 'react';
import { View, StyleSheet } from 'react-native';
import GraphicComponent from '../../components/Graphic/GraphicComponent';

export default function TabTwoScreen() {
  // Supondo que você tenha algum conjunto de dados para passar para o gráfico
  const dadosDoGrafico = [
    { Y: 22, X: 43, horario: '10:00' },
    { Y: 29, X: 45, horario: '11:00 ' },
    { Y: 20, X: 4, horario: '12:00 ' },
    // Adicione mais pontos conforme necessário
  ];

  return (
    <View style={styles.container}>
      <GraphicComponent data={dadosDoGrafico} key={'1'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});