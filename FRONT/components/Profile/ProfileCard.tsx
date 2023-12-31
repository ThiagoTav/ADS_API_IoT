import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ProfileCard({ nome: initialNome, cidade: initialCidade }) {
  const [nome, setNome] = useState(initialNome);
  const [cidade, setCidade] = useState(initialCidade);
  const [isEditing, setIsEditing] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  useEffect(() => {
    // Carregar dados salvos ao inicializar o componente
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const savedNome = await AsyncStorage.getItem('profileNome');
      const savedCidade = await AsyncStorage.getItem('profileCidade');

      if (savedNome) setNome(savedNome);
      if (savedCidade) setCidade(savedCidade);
    } catch (error) {
      console.error('Erro ao carregar dados do perfil:', error);
    }
  };

  const saveProfileData = async () => {
    try {
      await AsyncStorage.setItem('profileNome', nome);
      await AsyncStorage.setItem('profileCidade', cidade);
    } catch (error) {
      console.error('Erro ao salvar dados do perfil:', error);
    }
  };

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleSavePress = () => {
    // Exibe o modal de confirmação
    setConfirmationModalVisible(true);
  };

  const handleConfirmation = (confirmed) => {
    // Callback chamado após o usuário confirmar ou cancelar no modal de confirmação
    if (confirmed) {
      // Usuário confirmou, salva os dados e fecha o modal de edição
      saveProfileData();
      setIsEditing(false);
    }

    // Fecha o modal de confirmação
    setConfirmationModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.circle}>
          <Image source={require('../../assets/images/Profile.png')} style={styles.centerImg} />
        </View>
        <View style={styles.containerTxt}>
          <Text style={styles.textProfile}>Nome: {nome}</Text>
          <Text style={styles.textProfileCity}>Cidade: {cidade}</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal para edição */}
      <Modal transparent={true} visible={isEditing} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.textInput}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              placeholderTextColor="#BDC3C7"
            />
            <TextInput
              style={styles.textInput}
              value={cidade}
              onChangeText={setCidade}
              placeholder="Cidade"
              placeholderTextColor="#BDC3C7"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de confirmação */}
      <Modal transparent={true} visible={confirmationModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.confirmationText}>Deseja salvar as alterações?</Text>
            <Pressable onPress={() => handleConfirmation(true)}>
              <Text style={styles.confirmationOption}>Sim</Text>
            </Pressable>
            <Pressable onPress={() => handleConfirmation(false)}>
              <Text style={styles.confirmationOption}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#2C3E50',
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
    backgroundColor: '#34495E',
    width: 360,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerTxt: {
    marginLeft: 10,
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
    color: '#ECF0F1',
  },

  saveButton: {
    backgroundColor: '#27AE60',
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
    alignSelf: 'flex-start',
    color: '#ECF0F1',
  },

  saveButtonText: {
    color: '#ECF0F1',
  },

  editButton: {
    backgroundColor: '#3498DB',
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
    alignSelf: 'flex-start',
    elevation: 2,
  },

  editButtonText: {
    color: '#ECF0F1',
  },

  textProfile: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ECF0F1',
  },

  textProfileCity: {
    fontSize: 14,
    color: '#BDC3C7',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: '#34495E',
    borderRadius: 10,
    padding: 20,
    width: 300,
  },

  confirmationText: {
    fontSize: 18,
    color: '#ECF0F1',
    marginBottom: 10,
  },

  confirmationOption: {
    fontSize: 16,
    color: '#3498DB',
    marginBottom: 10,
  },
});