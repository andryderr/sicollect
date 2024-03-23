import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InputScreen: React.FC = ({ route }) => {
  const project_id = route.params?.project_id || '';
  const user_id = route.params?.user_id || '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Screen</Text>
      <Text>Project ID: {project_id}</Text>
      <Text>User ID: {user_id}</Text>
      {/* Tambahkan komponen input atau tampilan yang diperlukan */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default InputScreen;