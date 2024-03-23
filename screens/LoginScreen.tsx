import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../utils/AuthContext';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, setUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userData = await login(email, password);
      // Jika login berhasil, tampilkan alert "Berhasil Login"
      Alert.alert('Berhasil Login');
      // Simpan data pengguna ke state user di AuthContext
      setUser(userData);
      // Navigasikan pengguna ke halaman beranda
      // Gantikan 'BerandaScreen' dengan nama komponen halaman beranda yang sesuai di aplikasi kamu
      // navigation.navigate('BerandaScreen');
    } catch (error) {
      console.error(error);
      // Tampilkan pesan error jika login gagal
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Si Collect</Text>
      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>Silahkan Login dan Selamat Bekerja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
  },
  input: {
    marginBottom: 10,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#5D87FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: 'gray',
  },
});

export default LoginScreen;