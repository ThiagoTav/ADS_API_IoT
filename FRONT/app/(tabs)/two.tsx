import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, StyleSheet } from 'react-native';

const GraphicComponent = ({ data }) => {
  const getYValues = data.map(point => point.Y);
  const getXValues = data.map(point => point.X);
  const labels = data.map(point => point.horario);

  return (
    <View style={styles.chartContainer}>
      {/* Gráfico para o eixo Y */}
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: getYValues,
            },
          ],
        }}
        width={350}
        height={200}
        yAxisLabel={'Y '}
        xAxisLabel={'Horário'} // Adicionando o rótulo do eixo X
        chartConfig={{
          backgroundGradientFrom: '#1A2533',
          backgroundGradientTo: '#1A2533',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(236, 240, 241, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />

      {/* Gráfico para o eixo X */}
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: getXValues,
            },
          ],
        }}
        width={350}
        height={200}
        yAxisLabel={'X '}
        xAxisLabel={'Horário'} // Adicionando o rótulo do eixo X
        chartConfig={{
          backgroundGradientFrom: '#1A2533',
          backgroundGradientTo: '#1A2533',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(236, 240, 241, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A2533',
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default GraphicComponent;








import React from 'react';
import { View, StyleSheet } from 'react-native';
import GraphicComponent from '../../components/Graphic/Graphic';

export default function TabTwoScreen() {
  // Supondo que você tenha algum conjunto de dados para passar para o gráfico
  const dadosDoGrafico = [
    { Y: 22, X: 40, horario: '10:00' },
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
    backgroundColor: '#1A2533', 

  },
});
