import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EditProfileForm from '../../components/Profile/EditProfileForm';

export default function SaibaMaisScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('User');
  const [city, setCity] = useState('Sorocaba-SP');

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (newName, newCity) => {
    setName(newName);
    setCity(newCity);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>Perfil do Usuário</Text>
        {isEditing ? (
          <EditProfileForm
            onSave={handleSaveProfile}
            onCancel={handleCancelEdit}
            currentName={name}
            currentCity={city}
          />
        ) : (
          <View>
            <Text style={styles.profileText}>Nome: {name}</Text>
            <Text style={styles.profileText}>Cidade: {city}</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3498db', // Cor de fundo do card
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf0f1', // Cor do título
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ecf0f1', // Cor do texto
  },
  editButton: {
    backgroundColor: '#2c3e50', // Cor de fundo do botão de edição
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ecf0f1', // Cor do texto do botão
    fontSize: 16,
  },
});
