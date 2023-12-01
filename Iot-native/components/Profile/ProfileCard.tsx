import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export function ProfileCard ({nome, cidade}) {
  return (
    <View style={styles.container}>
    <View style={styles.rectangle}>
      <View style={styles.circle}>
        <Image source={require('../../assets/images/Profile.png')} style={styles.centerImg} />
        </View>
            <View style={styles.containerTxt}>
                <Text style={styles.TextProfile}>Nome:{nome}</Text>
                <Text style={styles.TextProfileCity}>Cidade:{cidade}</Text>
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 123,
    width: 271,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 50,
  },

  circle: {
    borderWidth: 1,
    borderRadius: 50, // Use metade da largura/altura para criar um círculo
    padding: 10,
    backgroundColor: '#7ED7C1',
    width: 65, // Ajuste conforme necessário
    height: 65, // Ajuste conforme necessário
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente a imagem e o texto
    alignSelf: 'center',
    },

  centerImg: {
    fontSize: 16, // Ajuste conforme necessário
    fontWeight: 'bold',
    color: 'black',
    width: 50,
    height: 50,
    right: 3.5,
  },

  rectangle: {
    borderWidth: 1, // Adiciona uma borda ao redor do retângulo
    borderRadius: 10,
    padding: 10, // Espaçamento interno para o texto dentro do retângulo
    backgroundColor: '#7ED7C1',
    width: 360,
    height: 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  containerTxt: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    right: 120,
    fontSize: 20,  
  },

  TextProfile: {
    
  },

  TextProfileCity: {
   
  }

});