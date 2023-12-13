import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

export default function TabTwoScreen() {
  const [dadosDoGrafico, setDadosDoGrafico] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('https://thiagotavares.pythonanywhere.com/api/dados-do-sensor/');
        const alerts = response.data;

        const dadosGrafico = alerts.map(alert => ({
          Y: alert.acceleration_y,
          X: alert.acceleration_x,
          horario: alert.timestamp,
        }));

        setDadosDoGrafico(dadosGrafico);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const valoresX = dadosDoGrafico.map(item => item.X);
  const valoresY = dadosDoGrafico.map(item => item.Y);

  const labels = dadosDoGrafico.map(item => item.horario);

  const dataX = {
    labels: labels,
    datasets: [
      {
        data: valoresX,
      },
    ],
  };

  const dataY = {
    labels: labels,
    datasets: [
      {
        data: valoresY,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1A2533',
    backgroundGradientTo: '#1A2533',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(236, 240, 241, ${opacity})`,
    style: {
      borderRadius: 10,
    },
  };

  return (
    <View style={styles.container}>
      {dadosDoGrafico.length > 0 ? (
        <View>
          {/* Gráfico para o eixo X */}
          <LineChart
            data={dataX}
            width={350}
            height={200}
            yAxisLabel={'X '}
            xAxisLabel={'Horário'}
            chartConfig={chartConfig}
            bezier
            style={{ marginVertical: 8, borderRadius: 10 }}
            withHorizontalLabels // Add title to the X-axis
          />

          {/* Gráfico para o eixo Y */}
          <LineChart
            data={dataY}
            width={350}
            height={200}
            yAxisLabel={'Y '}
            xAxisLabel={'Horário'}
            chartConfig={chartConfig}
            bezier
            style={{ marginVertical: 8, borderRadius: 10 }}
            withVerticalLabels // Add title to the Y-axis
          />
        </View>
      ) : (
        <View>
          {/* Exiba um indicador de carregamento ou uma mensagem de falta de dados aqui */}
        </View>
      )}
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
