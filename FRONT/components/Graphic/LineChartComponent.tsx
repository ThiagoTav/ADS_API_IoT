import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, StyleSheet } from 'react-native';

interface LineChartComponentProps {
  values: number[];
  labels: string[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ values, labels }) => {
  // Filtra rótulos indefinidos ou nulos
  const validLabels = labels.filter(label => label !== undefined && label !== null);

  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={{
          labels: validLabels,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={380}
        height={230}
        chartConfig={{
          backgroundGradientFrom: '#1A2533',
          backgroundGradientTo: '#1A2533',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(236, 240, 241, ${opacity})`,
          style: {
            borderRadius: 10,
          },
          propsForLabels: {
            color: '#ffffff',  // Cor dos rótulos
            fontSize: 12,      // Tamanho da fonte dos rótulos
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

export default LineChartComponent;
