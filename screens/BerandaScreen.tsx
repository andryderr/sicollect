import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../utils/AuthContext';
import { getProjects, downloadProject } from '../utils/Api';
import InputScreen from './InputScreen';
import { useNavigation } from '@react-navigation/native';

const BerandaScreen: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [downloadedProjects, setDownloadedProjects] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const projectsData = await getProjects(user?.user_id);
      setProjects(projectsData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = async (projectId) => {
    try {
      await downloadProject(projectId);
      Alert.alert('Berhasil Download');
      setDownloadedProjects([...downloadedProjects, projectId]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (projectId) => {
    // Navigasi ke layar InputScreen dengan mengirim project_id dan user_id
    // Pastikan kamu telah mengatur navigasi di aplikasi kamu
    navigation.navigate('Input Data', {
      project_id: projectId,
      user_id: user?.user_id,
    });
  };

  const renderProjectItem = ({ item }) => {
    const isDownloaded = downloadedProjects.includes(item.id);

    return (
      <View style={styles.card}>
        <Text style={styles.projectName}>{item.nama}</Text>
        <Text style={styles.projectDescription}>{item.deskripsi}</Text>
        <Text style={styles.projectTeam}>Tim ID: {item.tim_id.toString()}</Text>
        <TouchableOpacity
          style={[styles.downloadButton, isDownloaded && styles.disabledButton]}
          onPress={() => handleDownload(item.id)}
          disabled={isDownloaded}
        >
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => handleInput(item.id)}
        >
          <Text style={styles.inputButtonText}>Mengerjakan</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Daftar Proyek: {user?.user_id}</Text> */}
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  projectTeam: {
    fontSize: 14,
    color: 'gray',
  },
  downloadButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 8,
  },
  inputButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BerandaScreen;