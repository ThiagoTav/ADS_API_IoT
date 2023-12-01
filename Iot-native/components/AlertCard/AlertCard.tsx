import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export function AlertCard({ horario, X, Y }) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image source={require('../../assets/images/84045.png')} style={styles.image} />
        <Text style={styles.centerText}>Alerta {horario}</Text>
      </View>  
      <View style={styles.containerXY}>
        <View style={styles.containerX}>
          <View style={styles.rectangleX}>
            <Text style={styles.centerTextX}>X={X}</Text>
          </View>
        </View>
        <View style={styles.containerY}>
          <View style={styles.rectangleY}>
            <Text style={styles.centerTextY}>Y={Y}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Changed from 'row' to 'column'
    alignItems: 'center',
    height: 193, // Adjusted height to accommodate both X and Y components
    width: 371,
    borderRadius: 10,
    justifyContent: 'center',
  },

  rectangle: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    width: 330,
    height: 90,
    alignContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    top: 20
  },

  centerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    left: 30,
    gap: 50
  },

  image: {
    width: 50,
    height: 40,
    alignSelf: 'center',
  },
  containerX: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 123,
    width: 185, // Adjusted width to split the container in half
    borderRadius: 10,
    justifyContent: 'center',
    gap: 50,
  },

  rectangleX: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    width: 130,
    height: 70,
    alignContent: 'center',
  },

  centerTextX: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', 
  },

  containerY: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 123,
    width: 185, // Adjusted width to split the container in half
    borderRadius: 10,
    justifyContent: 'center',
    gap: 50,
  },

  rectangleY: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    width: 130,
    height: 70,
  },

  centerTextY: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', 
  },

  containerXY: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10, // Added margin to separate Alert from X and Y
  },
});