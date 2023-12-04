import React from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importe o componente de ícone

export function AlertCard({ horario, X, Y }) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Icon name="warning" size={30} color="#FFD700" style={styles.icon} />
        <Text style={styles.centerText}>Alerta {horario}</Text>
      </View>
      <View style={styles.containerXY}>
        <Animated.View style={styles.containerX}>
          <Animated.View style={styles.rectangleX}>
            <Text style={styles.centerTextX}>X={X}</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={styles.containerY}>
          <Animated.View style={styles.rectangleY}>
            <Text style={styles.centerTextY}>Y={Y}</Text>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 193,
    width: 371,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#2C3E50',
    marginVertical: 10,
  },

  rectangle: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#34495E',
    width: 330,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },

  centerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ECF0F1',
  },

  containerX: {
    alignItems: 'center',
    height: 123,
    width: 185,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 10,
  },

  rectangleX: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#34495E',
    width: 130,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerTextX: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ECF0F1',
  },

  containerY: {
    alignItems: 'center',
    height: 123,
    width: 185,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 10,
  },

  rectangleY: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#34495E',
    width: 130,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerTextY: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ECF0F1',
  },

  containerXY: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
