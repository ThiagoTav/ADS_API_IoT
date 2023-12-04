import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface EditProfileFormProps {
  onSave: (name: string, city: string) => void;
  onCancel: () => void;
  currentName: string;
  currentCity: string;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  onSave,
  onCancel,
  currentName,
  currentCity,
}) => {
  const [name, setName] = useState(currentName);
  const [city, setCity] = useState(currentCity);

  const handleSave = () => {
    onSave(name, city);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Cidade"
      />
      <Button title="Salvar" onPress={handleSave} />
      <Button title="Cancelar" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditProfileForm;
