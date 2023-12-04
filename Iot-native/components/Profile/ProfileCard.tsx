import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export function ProfileCard({ nome, cidade }) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.circle}>
          <Image source={require('../../assets/images/Profile.png')} style={styles.centerImg} />
        </View>
        <View style={styles.containerTxt}>
          <Text style={styles.textProfile}>Nome: {nome}</Text>
          <Text style={styles.textProfileCity}>Cidade: {cidade}</Text>
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
    marginVertical: 10,
  },

  circle: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#2C3E50', // Cor de fundo escuro
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerImg: {
    width: 50,
    height: 50,
  },

  rectangle: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#34495E', // Cor de fundo escuro
    width: 360,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerTxt: {
    marginLeft: 10,
  },

  textProfile: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ECF0F1', // Cor do texto branco
  },

  textProfileCity: {
    fontSize: 14,
    color: '#BDC3C7', // Cor do texto cinza claro
  },
});
