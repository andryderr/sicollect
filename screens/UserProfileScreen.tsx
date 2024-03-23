import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../utils/AuthContext';

const UserProfileScreen: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    // Hapus data pengguna dari state
    setUser(null);

    // Navigasikan pengguna ke halaman login
    // navigation.navigate('LoginScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User ID: {user?.user_id}</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} style={{ backgroundColor: '#5D87FF' }} />
    </View>
  );
};

export default UserProfileScreen;