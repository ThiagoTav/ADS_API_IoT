// GraphicComponent.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LineChartComponent from '../Graphic/LineChartComponent';
import axios from 'axios';

const GraphicComponent: React.FC = () => {
  const [dadosDoGrafico, setDadosDoGrafico] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('https://thiagotavares.pythonanywhere.com/api/dados-do-sensor/');
        const alerts = response.data;

        if (!Array.isArray(alerts)) {
          console.error('Dados da API não são um array:', alerts);
          return;
        }

        const dadosGrafico = alerts.map(alert => ({
          Y: parseFloat(alert.acceleration_y),
          X: parseFloat(alert.acceleration_x),
        }));

        console.log('Dados da API:', dadosGrafico);

        if (dadosGrafico.some(data => isNaN(data.X) || isNaN(data.Y))) {
          console.error('Alguns dados não são numéricos:', dadosGrafico);
          return;
        }

        // Verifica se há novos dados antes de atualizar o estado do gráfico
        if (!areArraysEqual(dadosGrafico, dadosDoGrafico)) {
          setDadosDoGrafico(dadosGrafico);
        }
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    // Buscar dados periodicamente a cada 5 segundos (ajuste conforme necessário)
    const intervalId = setInterval(fetchDataFromAPI, 5000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [dadosDoGrafico]); // Adiciona dadosDoGrafico como uma dependência

  // Função para verificar se dois arrays são iguais
  const areArraysEqual = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };

  const valoresX = dadosDoGrafico.map(item => item.X);
  const valoresY = dadosDoGrafico.map(item => item.Y);
  const labels = dadosDoGrafico.map(item => item.horario);

  return (
    <View style={styles.container}>
      {dadosDoGrafico.length > 0 ? (
        <View>
          {/* Título para o eixo X */}
          <Text style={styles.chartTitle}>Gráfico para o eixo X</Text>
          <LineChartComponent values={valoresX} labels={labels} yAxisLabel={'X '} />

          {/* Título para o eixo Y */}
          <Text style={styles.chartTitle}>Gráfico para o eixo Y</Text>
          <LineChartComponent values={valoresY} labels={labels} yAxisLabel={'Y '} />
        </View>
      ) : (
        <View>
          {/* Exiba um indicador de carregamento ou uma mensagem de falta de dados aqui */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A2533',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
});

export default GraphicComponent;
