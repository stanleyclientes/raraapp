import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'

export default function CriarIgreja() {
    //Expo Routes
  const router = useRouter();
  // States
  const [name, setName] = useState('');
  const [pastor1, setPastor1] = useState('')
  const [pastor2, setPastor2] = useState('')
  const [pais, setPais] = useState('')
  const [estado, setEstado] = useState('')
  const [endereco, setEndereco] = useState('');
  const [totalMembros, setTotalMembros] = useState<number>(0)
  // API URL
  const API_URL = "http://192.168.247.108:3000"; // Substitua pelo seu IP e porta do servidor

  // Handle the button register
  const handleRegister = async () => {
    try {
      console.log("Iniciando o cadastro...");
      const userData = {
        name,
        pastor1,
        pastor2,
        pais,
        estado,
        endereco,
        totalMembros
      };

      // envia os dados para o backend
      try {
        const response = await axios.post(`${API_URL}/igreja/post`, userData, {
          headers: {"Content-Type": "application/json"}
        })
        console.log('Igreja criada com sucesso', response.data)
        alert('Igreja criada com sucesso')
      } catch (error) {
        console.error('Erro ao criar igreja:', error)
        alert('Erro ao criar igreja')
      }

      // Limpar os inputs
      setName('');
      setEndereco('');
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem acima do título */}
      <Image
        source={require('@/assets/images/logo.jpg')}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Comunhão RARA</Text>
      <Text style={styles.subtitle}>Criar Igreja</Text>

      {/* Nome Completo */}
      <Text style={styles.label}>Nome da igreja</Text>
      <TextInput
        placeholder=""
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Email */}
      <Text style={styles.label}>Pastor Presidente</Text>
      <TextInput
        placeholder=""
        value={pastor1}
        onChangeText={setPastor1}
        style={styles.input}
      />

    <Text style={styles.label}>Co-Pastor</Text>
      <TextInput
        placeholder=""
        value={pastor2}
        onChangeText={setPastor2}
        style={styles.input}
      />

    <Text style={styles.label}>Co-Pastor</Text>
      <TextInput
        placeholder=""
        value={pastor2}
        onChangeText={setPastor2}
        style={styles.input}
      />

      {/* Endereço */}
      <Text style={styles.label}>Endereço</Text>
      <TextInput
        placeholder=""
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />

      {/* Endereço */}
      <Text style={styles.label}>País</Text>
      <TextInput
        placeholder=""
        value={pais}
        onChangeText={setPais}
        style={styles.input}
      />

      {/* Endereço */}
      <Text style={styles.label}>Estado</Text>
      <TextInput
        placeholder=""
        value={estado}
        onChangeText={setEstado}
        style={styles.input}
      />

      {/* Endereço */}
      <Text style={styles.label}>Endereço</Text>
      <TextInput
        placeholder=""
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />

      {/* Endereço */}
      <Text style={styles.label}>Total de Membros</Text>
      <TextInput
        placeholder=""
        value={estado}
        onChangeText={setEstado}
        style={styles.input}
      />



      <Button title="Criar conta" onPress={handleRegister} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    paddingTop: 100,
    paddingBottom: 200,
    backgroundColor: '#000',
    color: '#FFFFFF',
  },
  headerImage: {
    width: '100%',
    height: '20%',
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#FFFFFF',
  },
  input: {
    height: 55,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: '#FFFFFF',
    backgroundColor: '#444444',
    borderRadius: 10,
  },
  whatsappContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  picker: {
    flex: 5,
    height: 55,

    backgroundColor: '#444444',
    borderRadius: 10,
    color: '#FFFFFF',
    paddingHorizontal: 50,
    justifyContent: 'center',
    textAlign: 'center', // Centraliza o conteúdo
  },
  dddInput: {
    flex: 1,
    height: 55,
    width: 65,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    color: '#FFFFFF',
    backgroundColor: '#444444',
    borderRadius: 10,
  },
  numberInput: {
    flex: 4,
    height: 55,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingHorizontal: 8,
    color: '#FFFFFF',
    backgroundColor: '#444444',
    borderRadius: 10,
  },
});